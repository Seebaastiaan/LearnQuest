export { cinematicaTopic } from "./cinematica";
export { electromagnetismoTopic } from "./electromagnetismo";
export { fisicaContemporaneaTopic } from "./fisica-contemporanea";
export { fluidosTopic } from "./fluidos";
export { fuerzasNewtonTopic } from "./fuerzas-newton";
export { ondasTopic } from "./ondas";
export { opticaTopic } from "./optica";
export { termodinamicaTopic } from "./termodinamica";
export { trabajoEnergiaTopic } from "./trabajo-energia";

import type { Topic } from "@/lib/types";

import { cinematicaTopic } from "./cinematica";
import { electromagnetismoTopic } from "./electromagnetismo";
import { fisicaContemporaneaTopic } from "./fisica-contemporanea";
import { fluidosTopic } from "./fluidos";
import { fuerzasNewtonTopic } from "./fuerzas-newton";
import { ondasTopic } from "./ondas";
import { opticaTopic } from "./optica";
import { termodinamicaTopic } from "./termodinamica";
import { trabajoEnergiaTopic } from "./trabajo-energia";

export const allPhysicsTopics: Topic[] = [
  cinematicaTopic,
  fuerzasNewtonTopic,
  trabajoEnergiaTopic,
  termodinamicaTopic,
  ondasTopic,
  electromagnetismoTopic,
  fluidosTopic,
  opticaTopic,
  fisicaContemporaneaTopic,
];
