import { WebDev, MobDev, TestDev, DevFacade } from "./developer.js";

export function hireWebDev() {
  return new DevFacade(new WebDev());
}

export function hireMobDev() {
  return new DevFacade(new MobDev());
}

export function hireTestDev() {
  return new DevFacade(new TestDev());
}