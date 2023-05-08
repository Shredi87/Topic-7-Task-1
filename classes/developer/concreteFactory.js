import { WebDev, MobDev, TestDev } from "./developer.js";

export function hireWebDev() {
  return new WebDev();
}

export function hireMobDev() {
  return new MobDev();
}

export function hireTestDev() {
  return new TestDev();
}