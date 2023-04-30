import { teamLead } from "./classes/teamLead.js";
import { office } from './classes/department.js';
import { checkNeedRemoveDev } from "./funcCheckNeedRemoveDev.js";

export function workingOffice(days) {

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
  
}// Функция-рандомайзер используется в соответствующих проектах для определения:
// 1. типов проектов (веб|мобильные) в функции chooseTypeProject
// 2. количества проектов (от 0 до 4) в функции chooseQuantityProjects
// 3. сложности проектов (от 1 до 3) для каждого проекта выбираются отдельно chooseDifficultProject
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// 1. Выбор типа проектов
// Тип проектов поступивших в один день может быть только веб или только мобильные
// где 0 - веб-проекты, а 1 - мобильные проекты.
export function chooseTypeProject() {
  let typeProject = randomInteger(0, 1);
  return (typeProject === 1) ? 'MOBIL' : 'WEB';
}

// 2. Определение количества проектов
export function chooseQuantityProjects() {
  let quantityProjects = randomInteger(0, 4);
  return quantityProjects;
}

// 3. Определение сложности каждого проекта
export function chooseDifficultProject() {
  let difficultProject = randomInteger(1, 3);
  return difficultProject;
}

// Функция сортировки объектов массива listWaitDev по количеству выполненных проектов (countProject) в порядке возрастания
export let sortFunc = function () {
    if (a.getCountProject() > b.getCountProject()) {
      return 1;
    }
    if (a.getCountProject() < b.getCountProject()) {
      return -1;
    }
    // a должно быть равным b
    return 0;
}

