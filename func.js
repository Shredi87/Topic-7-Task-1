function workingOffice(days) {

  for (let i = 1; i <= days; i++) {
    // Начало рабочего дня
    console.log(`new work day ${i}`);
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

// Функция-рандомайзер используется в соответствующих проектах для определения:
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
function chooseTypeProject() {
  let typeProject = randomInteger(0, 1);
  return (typeProject === 1) ? 'MOBIL' : 'WEB';
}

// 2. Определение количества проектов
function chooseQuantityProjects() {
  let quantityProjects = randomInteger(0, 4);
  return quantityProjects;
}

// 3. Определение сложности каждого проекта
function chooseDifficultProject() {
  let difficultProject = randomInteger(1, 3);
  return difficultProject;
}