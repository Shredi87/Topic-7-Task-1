import { teamLead } from "./classes/teamLead.js";
import { webDepartment, mobilDepartment, testDepartment } from './classes/department.js';
import { funcCheckNeedRemoveDev } from "./funcCheckNeedRemoveDev.js";

function workingOffice(days) {
  let countWebProject;
  let countMobilProject;
  let countTestProject;
  let countHireMobDev;
  let countRemoveMobDev;
  let countHireWebDev;
  let countRemoveWebDev;
  let countHireTestDev;
  let countRemoveTestDev;

  for (let i = 1; i <= days; i++) {
    console.log(`workingOffice day ${i}`);
    teamLead.checkStack(webDepartment);
    teamLead.checkStack(mobilDepartment);
    teamLead.checkStack(testDepartment);
    teamLead.getProjects();



    funcCheckNeedRemoveDev(webDepartment);
    funcCheckNeedRemoveDev(mobilDepartment);
    funcCheckNeedRemoveDev(testDepartment);
  }

  return console.log(`За ${days} дней было сформировано: 
  ${countWebProject} веб проектов,
  ${countMobilProject} мобильных проектов,
  ${countTestProject} и выпущено в работу  проектов. 
  А также нанято ${countHireMobDev} и уволено ${countRemoveMobDev} веб-разработчиков,
          нанято ${countHireWebDev} и уволено ${countRemoveWebDev} мобильных разработчиков,
          нанято ${countHireTestDev} и уволено ${countRemoveTestDev} QA специалистов.`);
  
}

workingOffice(15);