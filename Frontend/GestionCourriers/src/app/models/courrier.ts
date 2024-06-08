import { Dossier } from "./dossier";
import { ModeTransmission } from "./mode-transmission";
import {Time} from "@angular/common";

export class Courrier {
    id?: number;
  // numero?: number;
  dateEnregistrement?: Date;
  refCourrier?: number;
  codeBarre?: string;
  objet?: string;
  observation?: string;
  modeTransmission?: ModeTransmission;
  dateReception?: Date;
  dossier?: Dossier;
  piecesJointes?: File;
  copieDoc?: File;
}
