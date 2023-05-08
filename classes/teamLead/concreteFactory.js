import { WebProject, MobilProject, TestProject } from "../project.js";
import { webDepartment, mobilDepartment, testDepartment } from "../department.js";

export function addWebProject(difficultProject) {
  let project = new WebProject(difficultProject); // создаем новый веб проект с определенной выше сложностью
  webDepartment.listWaitProject.push(project); // и добавляем его в массив веб проектов созданных этим днем
  webDepartment.setCountComingProject();
}

export function addMobilProject(difficultProject) {
  let project = new MobilProject(difficultProject); // создаем новый мобильный проект с определенной выше сложностью
  mobilDepartment.listWaitProject.push(project); // и добавляем его в массив мобильных проектов созданных этим днем
  mobilDepartment.setCountComingProject();
}

export function addTestProject() {
  let difficultProject = 1;
  let project = new TestProject(difficultProject);
  testDepartment.listWaitProject.push(project); // и добавляем его в массив мобильных проектов созданных этим днем
  testDepartment.setCountComingProject();
}



