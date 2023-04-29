// каскад функций, проверяющий равен ли счетчик дней простоя программистов в отделе (department.countWaitDays) трем.
// при верном условии запускает метод увольнения программиста
// также следит за изменением счетчика дней простоя программистов в отделе (department.countWaitDays)
export function checkNeedRemoveDev(department) {
  let waitDays = department.getCountWaitDays(); // количество дней простоя берем из отдела

  if (checklistWaitDevDepartment(department)) { // если в списке простоя есть хоть кто-то
    if (checkQuantityWaitngDays(waitDays)) { // проверяем равен ли простой программистов трем дням
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

function checklistWaitDevDepartment(department) {
  return (department.listWaitDev.length !== 0);
}

function checkQuantityWaitngDays(waitDays) {
  return (waitDays === 3);
}