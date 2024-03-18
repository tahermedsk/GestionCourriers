import { Dossier } from "./dossier";
import { ModeTransmission } from "./mode-transmission";

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
