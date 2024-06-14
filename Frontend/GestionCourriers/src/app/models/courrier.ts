import { Dossier } from "./dossier";
import { ModeTransmission } from "./mode-transmission";
import {Time} from "@angular/common";

export enum Status {
  ARCHIVE = 'ARCHIVE',
  INSTANCE = 'INSTANCE',
  LIS = 'LIS'
}


export class Courrier {
    id?: number;
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
    status?: Status; // Ajouter le champ status
}
