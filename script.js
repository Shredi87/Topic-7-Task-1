import { teamLead } from "./classes/teamLead.js";
import { office } from './classes/department.js';
import { checkNeedRemoveDev } from "./funcCheckNeedRemoveDev.js";

function workingOffice(days) {

  for (let i = 1; i <= days; i++) {
    console.log(`workingOffice day ${i}`);
    // Начало рабочего дня
    // Проверяем наличие законченных проектов и переводим освободившихся программистов в список простоя
    office.forEach(department => department.checkWorkSpace());

    // Отправляем в работу оставшиеся со вчера проекты и освободившихся разработчиков
    office.forEach(department => department.fillWorkSpace());

    // Проверяем наличие проектов в списке ожидания и нанимаем на них программистов
    office.forEach(teamLead.checkStack());
    // teamLead.checkStack(webDepartment);
    // teamLead.checkStack(mobilDepartment);
    // teamLead.checkStack(testDepartment);

    // Директор генерирует новые проекты
    teamLead.getProjects();

    // Отправляем в работу новые проекты со свободными разработчиками
    office.forEach(department => department.fillWorkSpace());

    // Сортируем списки простоя программистов по количеству проектов
    office.forEach(department => department.sortListWaitDev());

    // Проверяем необходимость увольнения программистов
    office.forEach(department => checkNeedRemoveDev(department));
    // checkNeedRemoveDev(webDepartment);
    // checkNeedRemoveDev(mobilDepartment);
    // checkNeedRemoveDev(testDepartment);
  }

  return console.log(`За ${days} дней было сформировано: 
  ${office[0].getCountFinishedProject()} веб проектов,
  ${office[1].getCountFinishedProject()} мобильных проектов,
  ${office[2].getCountFinishedProject()} и выпущено в работу  проектов. 
  А также нанято ${office[0].getCountHireDev()} и уволено ${office[0].getCountRemoveDev()} веб-разработчиков,
          нанято ${office[1].getCountHireDev()} и уволено ${office[1].getCountRemoveDev()} мобильных разработчиков,
          нанято ${office[2].getCountHireDev()} и уволено ${office[2].getCountRemoveDev()} QA специалистов.`);
  
}

workingOffice(15);