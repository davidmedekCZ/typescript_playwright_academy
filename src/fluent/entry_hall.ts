// src/fluent/
// bathroom.ts
// visitor.ts
// * entry_hall.ts  (tady začneme programovat)

import { Bathroom } from "./bathroom.ts";
import { SecondFloor } from "./second_floor.ts";

export class EntryHall {
  readonly visitorName: string;

  constructor(visitorName: string) {
    this.visitorName = visitorName;
    console.log(`Návštěvník ${visitorName} vstoupil do vstupní haly.`);
  }

  entryBathroom() {
    console.log(`Návštěvník ${this.visitorName} jde na toaletu.`);
    return new Bathroom(this.visitorName);
  }

  askReceptionistQuestion(question: string) {
    console.log(
      `${this.visitorName} se ptá recepční na otázku: "${question}".`
    );
    console.log("Recepční mlčí.");
    return this;
  }

  async takeElevatorToSecondFloor(): Promise<SecondFloor> {
    console.log(`Uživatel ${this.visitorName} si volá výtah do 2. patra.`);
    const waitingForElevatorMs = 2000;
    await new Promise((resolve) => setTimeout(resolve, waitingForElevatorMs));
    console.log(`Výtah přijel do vstupní haly.`);
    console.log(`Výtah dorazil, uživatel ${this.visitorName} nastupuje.`);
    const elevatorRideMs = 2000;
    await new Promise((resolve) => setTimeout(resolve, elevatorRideMs));
    console.log(`Uživatel ${this.visitorName} vystupuje z výtahu v 2. patře.`);
    return new SecondFloor(this.visitorName);
  }
}
