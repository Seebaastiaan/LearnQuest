export { aguaTopic } from "./agua";
export { aireTopic } from "./aire";
export { alimentosTopic } from "./alimentos";
export { energiaReaccionesTopic } from "./energia-reacciones";
export { quimicaCarbonoTopic } from "./quimica-carbono";
export { temasBasicosTopic } from "./temas-basicos";

import type { Topic } from "@/lib/types";
import { aguaTopic } from "./agua";
import { aireTopic } from "./aire";
import { alimentosTopic } from "./alimentos";
import { energiaReaccionesTopic } from "./energia-reacciones";
import { quimicaCarbonoTopic } from "./quimica-carbono";
import { temasBasicosTopic } from "./temas-basicos";

export const allChemistryTopics: Topic[] = [
  temasBasicosTopic,
  aguaTopic,
  aireTopic,
  alimentosTopic,
  energiaReaccionesTopic,
  quimicaCarbonoTopic,
];
