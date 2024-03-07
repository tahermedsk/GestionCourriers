import { Component } from '@angular/core';
import { LectureVentilation } from 'src/app/models/lecture-ventilation';
import { LectureVentilationService } from 'src/app/services/lecture-ventilation.service';

@Component({
  selector: 'app-ventilation-dest',
  templateUrl: './ventilation-dest.component.html',
  styleUrls: ['./ventilation-dest.component.css']
})
export class VentilationDestComponent {

  lectureVentilation: LectureVentilation = new LectureVentilation();
  submitted = false;

  constructor(private lectureVentilationService: LectureVentilationService) { }

  enregistrerLectureVentilation(): void {
    this.lectureVentilationService.createLectureVentilation(this.lectureVentilation)
      .subscribe(
        (response) => {
          console.log(response);
          this.submitted = true;
        },
        (error) => {
          console.error(error);
        }
      );
  }

}
