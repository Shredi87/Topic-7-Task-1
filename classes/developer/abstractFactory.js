import { hireWebDev, hireMobDev, hireTestDev } from "./concreteFactory.js";

export function hireDev(typeProject) {
  switch (typeProject) {
    case 'WEB':
      return hireWebDev();
    case 'MOBIL':
      return hireMobDev();
    case 'TEST':
      return hireTestDev();
  }
}