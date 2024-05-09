import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Subscription, finalize } from 'rxjs';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { Subject } from 'rxjs';
import { Dossier } from 'src/app/models/dossier';

@Component({
  selector: 'app-joint-file',
  templateUrl: './joint-file.component.html',
  styleUrls: ['./joint-file.component.css']
})
export class JointFileComponent {
  @Input() dossier ?: string ;
  @Input() requiredFileType: string | undefined;
  @Input() reference: number| undefined;
  

  fileName = '';

  // Subject to emit signal when to upload file
  uploadSignal$: Subject<void> = new Subject<void>();
   formData = new FormData();
  constructor(private http: HttpClient, private upload_service: UploadFileService) { }

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const file: File | undefined = fileInput?.files?.[0];

    if (file) {
     
      console.log(this.dossier)
      this.fileName = file.name;
      
      // Subscribe to uploadSignal$
      this.uploadSignal$.subscribe(() => {
        
        this.formData.append("thumbnail", file);

        const upload$ = this.upload_service.upload(this.formData).subscribe();

        
      });
    }
  }

  // Function to trigger upload
  triggerUpload() {

    if (this.reference) {
          this.formData.append("reference", this.reference.toString());
        }
        console.log("code :"+this.dossier)
        if (this.dossier) {
        this.formData.append("dossier", this.dossier);
        }
        
    this.uploadSignal$.next();
  }


}
