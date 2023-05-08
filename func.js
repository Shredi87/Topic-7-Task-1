import { webDepartment, mobilDepartment, testDepartment } from "./classes/department.js";
import { teamLead } from "./classes/teamLead.js";


const office = [webDepartment, mobilDepartment, testDepartment];

export function workingOffice(days) {

  for (let i = 1; i <= days; i++) {
    // Начало рабочего дня
    console.log(`new work day ${i}`);

    office.forEach(department => {
      // Проверяем наличие законченных проектов и переводим освободившихся программистов в список простоя
      department.checkWorkSpace();
      // Отправляем в работу оставшиеся со вчера проекты и освободившихся разработчиков
      department.fillWorkSpace();
      // Проверяем наличие проектов в списке ожидания и нанимаем на них программистов
      teamLead.checkStack(department);
    });

    // Директор генерирует новые проекты
    teamLead.getProjects();


    
    office.forEach(department => {
      // Отправляем в работу новые проекты со свободными разработчиками
      department.fillWorkSpace();
      // Сортируем списки простоя программистов по количеству проектов
      department.sortListWaitDev();
      // Проверяем необходимость увольнения программистов
      checkNeedRemoveDev(department);
    });
  }

  return console.log(`За ${days} дней было сформировано: 
  // ${webDepartment.getCountComingProject()} веб проектов,
  // ${mobilDepartment.getCountComingProject()} мобильных проектов,
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

