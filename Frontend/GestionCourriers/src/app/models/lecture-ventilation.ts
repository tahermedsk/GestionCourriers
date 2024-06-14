import { DegreUrgence } from './degre-urgence';
import { Direction } from './direction'; 
import { ReceptionCourrier } from './reception-courrier';

export class LectureVentilation {
  id?: number;
  dateEnregistrement?: Date;
  sg?: boolean;
  ministre?: boolean;
  date_sg?: Date;
  date_ministre?: Date;
  degreUrgence?: DegreUrgence;
  date_ventilation?: Date;
  observation?: string;
  annotation?: string;
  direction?: Direction;
  receptionCourrier?: ReceptionCourrier;
  status: string | undefined;
}
