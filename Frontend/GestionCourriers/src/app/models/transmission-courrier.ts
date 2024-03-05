import { Courrier } from "./courrier";
import { Direction } from "./direction";

export class TransmissionCourrier extends Courrier {
  direction?:Direction;
  desinateur?: Direction;
  ampliations?: Direction[];
}
