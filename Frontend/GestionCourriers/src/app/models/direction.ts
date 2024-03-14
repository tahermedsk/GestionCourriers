import { Departement } from './departement';
import { LectureVentilation } from './lecture-ventilation';
import { ReceptionCourrier } from './reception-courrier';
import { TransmissionCourrier } from './transmission-courrier';

export class Direction {
  id?: number;
  code?: number;
  libelle?: String;
  departement?: Departement;
}
