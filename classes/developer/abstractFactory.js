import { hireWebDev, hireMobDev, hireTestDev } from "./concreteFactory.js";

export function hireDev(typeProject) {
  switch (typeProject) {
    case 'WEB':
      hireWebDev();
      break;
    case 'MOBIL':
      hireMobDev();
      break;
    case 'TEST':
      hireTestDev();
      break;
  }
}