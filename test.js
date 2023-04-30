class Department {
  listWaitProject // очередь ожидающих проектов
  workSpace // список проектов в работе
  listWaitDev // список простаивающих программистов
  #countWaitDays // счетчик дней простоя программистов
  typeDepartment // тип отдела
  #countFinishedProject // количество законченных проектов

  constructor() {
    this.listWaitProject = [];
    this.workSpace = new Map();
    this.listWaitDev = [];
    this.#countWaitDays = 0;
    this.#countFinishedProject =0;

  }

  getCountWaitDays() {
    return this.#countWaitDays;
  }

  setCountWaitDays(waitDays) {
    if (waitDays === 0) {
      this.#countWaitDays = 0;
    } else if (waitDays === 3) {
      this.#countWaitDays = 3;
    } else {
      this.#countWaitDays += 1;
    }
  }

  get typeDepartment() {
    return this.typeDepartment;
  }

  sortListWaitDev() {
    this.listWaitDev = this.listWaitDev.sort(sotrFunc);
  }

  getCountFinishedProject() {
    return this.#countFinishedProject;
  }

  setCountFinishedProject() {
    this.#countFinishedProject += 1;
  }
}

let department = new Department();
// Работа, связанная с отделами...
// Шаг 1. Проверяем пуста или нет очередь ожидающих проектов
// если нет, то нанимаем циклов прогеров нужного отдела по количеству проектов teamLead.checkStack();
// если очередь пуста, то никого не нанимаем и переходим к следующему шагу.
// Шаг 2. Директор генерирует проекты и вносит их в очередь ожидающих проектов
// сравниваем очередь ожидающих проектов и список простаивающих программистов по длине массивов - три варианта
// Вариант 1. Проектов = программистов
// итерируем по количеству проектов в Мапу, где проект ключ, а прогер значение.
// Вариант 2. Проектов < программистов
// итерируем по количеству проектов в Мапу, где проект ключ, а прогер значение. В списке простоя длина больше нуля, поэтому запускается счетчик дней простоя.
// 
// Вариант 3. Проектов > программистов
// итерируем по количеству программистов в Мапу, где проект ключ, а прогер значение.


function fillWorkSpace(department) { // организовывыаем рабочее пространство (наполняем мапу)
  let length = (department.listWaitProject.length >= department.listWaitDev.length) ? department.listWaitProject.length : department.listWaitDev.length;
  for (let i = 0; i < length; i++) {
    department.workSpace.set(department.listWaitProject[i], department.listWaitDev[i]);
    dev.setWorkDay();
  }
}

function checkWorkSpace(department) {
  for (let [key, value] of department.workSpace) {
    if (key.difficultProject === value.getWorkDay()) {
      department.listWaitDev.unshift(department.workSpace.get(key));
      department.workSpace.delete(key);

    }
  }
}

// testDepartment
checkWorkSpace() {
  for (let project of department.workSpace.keys()) {
    department.workSpace.get(project).setCountProject();
    department.listWaitDev.unshift(department.workSpace.get(project));
    department.setCountFinishedProject()
    department.workSpace.delete(project);  
  }
}

// WebDepartment
function checkWorkSpace(department) {
  for (let [project, developer] of department.workSpace) {
    if (project.difficultProject === developer.getWorkDay()) {
      testDepartment.listWaitDev.push(project);
      this.listWaitDev.push(developer);
      department.workSpace.delete(project);
      developer.setCountProject();
      department.setCountFinishedProject()  
    }

    
  }
}

