import { Component } from '@angular/core';
import { Direction } from 'src/app/models/direction';
import { LectureVentilation } from 'src/app/models/lecture-ventilation';
import { DirectionService } from 'src/app/services/direction.service';
import { LectureVentilationService } from 'src/app/services/lecture-ventilation.service';

@Component({
  selector: 'app-ventilation-dest',
  templateUrl: './ventilation-dest.component.html',
  styleUrls: ['./ventilation-dest.component.css']
})
export class VentilationDestComponent {

  lectureVentilation: LectureVentilation = new LectureVentilation();
  submitted = false;
  code ?: number  ;
  libelle ?: String ="";
  directions ?: Direction[];
  constructor(private lectureVentilationService: LectureVentilationService,private directionService : DirectionService) { }

  enregistrerLectureVentilation(): void {
    console.log(this.lectureVentilation.degreUrgence);
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
  ngOnInit(): void {
    this.directionService.getAllDirections().subscribe(
      (data) => {
        this.directions =data;
     
},
      (error) => {
        console.error('Error fetching direction:', error);
      }
    );
    
  }

  onInputChange() {
    this.directions?.forEach(element => {if(element.code==this.code){
        this.libelle=element.libelle ;
    }
  }
    )
  }

}
