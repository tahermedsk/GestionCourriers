import { Direction } from './direction';
import { LectureVentilation } from './lecture-ventilation';
import { Courrier } from './courrier';
export class ReceptionCourrier extends Courrier {
  direction?: Direction;
  expediteur?:Direction;
  lectureVentilation?: LectureVentilation;
}
