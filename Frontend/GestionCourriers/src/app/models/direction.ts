import { Departement } from './departement';
import { LectureVentilation } from './lecture-ventilation';
import { ReceptionCourrier } from './reception-courrier';
import { TransmissionCourrier } from './transmission-courrier';

export class Direction {
  id?: number;
  code?: number;
  libelle?: string;
  departement?: Departement;
  lectureVentilations?: LectureVentilation[];
  receptionCourriers?: ReceptionCourrier[];
  transmissionCourriers?: TransmissionCourrier[];
}
