import { teamLead } from "./classes/teamLead.js";
import { webDepartment, mobilDepartment, testDepartment } from './classes/department.js';
import { checkNeedRemoveDev } from "./funcCheckNeedRemoveDev.js";

function workingOffice(days) {

  for (let i = 1; i <= days; i++) {
    console.log(`workingOffice day ${i}`);
    // Начало рабочего дня
    
    teamLead.checkStack(webDepartment);
    teamLead.checkStack(mobilDepartment);
    teamLead.checkStack(testDepartment);
    teamLead.getProjects();



    checkNeedRemoveDev(webDepartment);
    checkNeedRemoveDev(mobilDepartment);
    checkNeedRemoveDev(testDepartment);
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