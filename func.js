import { teamLead } from "./classes/teamLead.js";
import { WebDepartment, MobilDepartment, TestDepartment } from './classes/department.js';

export let webDepartment = new WebDepartment();
export let mobilDepartment = new MobilDepartment();
export let testDepartment= new TestDepartment();
// let office = [webDepartment, mobilDepartment, testDepartment];

export function workingOffice(days) {

  for (let i = 1; i <= days; i++) {
    // Начало рабочего дня
    // Проверяем наличие законченных проектов и переводим освободившихся программистов в список простоя
    //office.forEach(department => department.checkWorkSpace());
    webDepartment.checkWorkSpace();
    mobilDepartment.checkWorkSpace();
    testDepartment.checkWorkSpace();

    // Отправляем в работу оставшиеся со вчера проекты и освободившихся разработчиков
    //office.forEach(department => department.fillWorkSpace());
    webDepartment.fillWorkSpace();
    mobilDepartment.fillWorkSpace();
    testDepartment.fillWorkSpace();
    // Проверяем наличие проектов в списке ожидания и нанимаем на них программистов
    //office.forEach(department => teamLead.checkStack(department));
    teamLead.checkStack(webDepartment);
    teamLead.checkStack(mobilDepartment);
    teamLead.checkStack(testDepartment);

    // Директор генерирует новые проекты
    teamLead.getProjects();

    // Отправляем в работу новые проекты со свободными разработчиками
    //office.forEach(department => department.fillWorkSpace());
    webDepartment.fillWorkSpace();
    mobilDepartment.fillWorkSpace();
    testDepartment.fillWorkSpace();
    // Сортируем списки простоя программистов по количеству проектов
    // office.forEach(department => department.sortListWaitDev());
    webDepartment.sortListWaitDev();
    mobilDepartment.sortListWaitDev();
    testDepartment.sortListWaitDev();
    // Проверяем необходимость увольнения программистов
    // office.forEach(department => checkNeedRemoveDev(department));
    checkNeedRemoveDev(webDepartment);
    checkNeedRemoveDev(mobilDepartment);
    checkNeedRemoveDev(testDepartment);
  }

  // return console.log(`За ${days} дней было сформировано: 
  // ${office[0].getCountFinishedProject()} веб проектов,
  // ${office[1].getCountFinishedProject()} мобильных проектов,
  // и успешно завершено ${office[2].getCountFinishedProject()} проектов. 
  // А также нанято ${office[0].getCountHireDev()} и уволено ${office[0].getCountRemoveDev()} веб-разработчиков,
  //         нанято ${office[1].getCountHireDev()} и уволено ${office[1].getCountRemoveDev()} мобильных разработчиков,
  //         нанято ${office[2].getCountHireDev()} и уволено ${office[2].getCountRemoveDev()} QA специалистов.`);
  return console.log(`За ${days} дней было сформировано: 
  // ${webDepartment.getCountFinishedProject()} веб проектов,
  // ${mobilDepartment.getCountFinishedProject()} мобильных проектов,
  // и успешно завершено ${testDepartment.getCountFinishedProject()} проектов. 
  // А также нанято ${webDepartment.getCountHireDev()} и уволено ${webDepartment.getCountRemoveDev()} веб-разработчиков,
  //         нанято ${mobilDepartment.getCountHireDev()} и уволено ${mobilDepartment.getCountRemoveDev()} мобильных разработчиков,
  //         нанято ${testDepartment.getCountHireDev()} и уволено ${testDepartment.getCountRemoveDev()} QA специалистов.`);
}



// каскад функций, проверяющий равен ли счетчик дней простоя программистов в отделе (department.countWaitDays) трем.
// при верном условии запускает метод увольнения программиста
// также следит за изменением счетчика дней простоя программистов в отделе (department.countWaitDays)
function checkNeedRemoveDev(department) {
  let waitDays = department.countWaitDays; // количество дней простоя берем из отдела

  if (department.listWaitDev.length > 0) { // если в списке простоя есть хоть кто-то
    if (waitDays === 3) { // проверяем равен ли простой программистов трем дням
      department.setCountWaitDays(waitDays); // передаем в счетчик простоя отдела тож значение "три"
      teamLead.removeDev(department); // увольняем программиста
      return; // и выходим из функции
    }

    waitDays++; // если счетчик простоя меньше трех увеличиваем его на один
    department.setCountWaitDays(waitDays); // возвращаем значение в счетчик простоя отдела
    return; // и выходим из функции
  }
  waitDays = 0; // при пустом списке ожидания дни ожидания обнуляются
  department.setCountWaitDays(waitDays); // и счетчик дней простоя в отделе тоже
  return; // выходим из функции
}

// function checklistWaitDevDepartment(department) {
//   return (department.listWaitDev.length > 0);
// }

// function checkQuantityWaitngDays(waitDays) {
//   return (waitDays === 3);
// }