class Department {
  listWaitProject // очередь ожидающих проектов
  workSpace // список проектов в работе
  listWaitDev // список простаивающих программистов
  typeDepartment // тип отдела
  countWaitDays // счетчик дней простоя программистов
  countFinishedProject // количество законченных проектов
  countHireDev // количество нанятых разработчиков
  countRemoveDev // коичество уволенных разработчиков
  countComingProject // список входящих проектов

  constructor() {
    this.listWaitProject = [];
    this.workSpace = new Map();
    this.listWaitDev = [];
    this.countWaitDays = 0;
    this.countFinishedProject = 0;
    this.countHireDev = 0;
    this.countRemoveDev = 0;
    this.countComingProject = 0;
  }

  get countWaitDays() {
    return this.countWaitDays;
  }

  setCountWaitDays(waitDays) {
    if (waitDays === 0) {
      this.countWaitDays = 0;
    } else if (waitDays === 3) {
      this.countWaitDays = 3;
    } else {
      this.countWaitDays += 1;
    }
  }

  get typeDepartment() {
    return this.typeDepartment;
  }

  sortListWaitDev() {
    this.listWaitDev = this.listWaitDev.sort(sortFunc);
  }

  getCountFinishedProject() {
    return this.countFinishedProject;
  }

  setCountFinishedProject() {
    this.countFinishedProject += 1;
  }

  getCountComingProject() {
    return this.countComingProject;
  }

  setCountComingProject() {
    this.countComingProject += 1;
  }

  getCountHireDev() {
    return this.countHireDev;
  }

  setCountHireDev() {
    this.countHireDev += 1;
  }

  getCountRemoveDev() {
    return this.countRemoveDev;
  }

  setCountRemoveDev() {
    this.countRemoveDev += 1;
  }
}

class WebDepartment extends Department {

  constructor() {
    super();
    this.typeDepartment = 'WEB';
  }
  
  fillWorkSpace() { // организовываем рабочее пространство (наполняем мапу)
    let length = (this.listWaitProject.length <= this.listWaitDev.length) ? this.listWaitProject.length : this.listWaitDev.length;
    for (let i = 0; i < length; i++) {
      let project = this.listWaitProject.pop();
      let developer = this.listWaitDev.pop();
      developer.setWorkDays(1);
      this.workSpace.set(project, developer);
    }
  
  }

  checkWorkSpace() {
    console.log('this web department');
    console.log(this.workSpace);
    for (let project of this.workSpace.keys()) {
      let developer = this.workSpace.get(project);
      console.log(project);
      console.log(developer);
      if (project.difficultProject === developer.workDays) {
        console.log('BINGOOOOO');   
        developer.setCountProject();
        developer.setWorkDays(0);     
        this.listWaitDev.push(developer);
        this.workSpace.delete(project);
        this.setCountFinishedProject(); 
        this.countWaitDays = 0;
        let difficultProject = 1;
        project = new TestProject(difficultProject);
        console.log(project);
        testDepartment.listWaitProject.push(project); // и добавляем его в массив мобильных проектов созданных этим днем
        testDepartment.setCountComingProject();
        console.log(testDepartment.getCountComingProject());
        console.log(developer);
      } else {
        developer.setWorkDays(1);
        console.log(developer);
      }
    }
  }
}

class MobilDepartment extends Department {

  constructor() {
    super();
    this.typeDepartment = 'MOBIL';
  }

  fillWorkSpace() { // организовываем рабочее пространство (наполняем мапу)
    if ((this.listWaitProject.length > 0) && (this.listWaitDev.length > 0)) {
      let length = (this.listWaitProject.length <= this.listWaitDev.length) ? this.listWaitProject.length : this.listWaitDev.length;
    
      for (let i = 0; i < length; i++) {
        let project = this.listWaitProject.pop();
        let developer = this.listWaitDev.pop();
        console.log(developer);
        if (Array.isArray(developer)) developer = developer[0];
        console.log(developer.workDays);
        developer.setWorkDays(1);
        let arrDeveloper = [];
        arrDeveloper[0] = developer;
        this.workSpace.set(project, arrDeveloper);
      }

      loop:
      for (let project of this.workSpace.keys()) {
        if (this.listWaitDev.length > 0) {
          console.log(project);
          let arrDeveloper = this.workSpace.get(project);
          console.log(arrDeveloper);
          let additionalDeveloper = this.listWaitDev.pop();
          if (Array.isArray(additionalDeveloper)) additionalDeveloper = additionalDeveloper[0];
          console.log(additionalDeveloper);
          additionalDeveloper.setWorkDays(1);
          arrDeveloper = arrDeveloper.concat(additionalDeveloper);
          let efficiency;
          for (let i = 0; i < arrDeveloper.length; i++) {
            console.log(arrDeveloper[i].workDays);
            efficiency += arrDeveloper[i].workDays;
          }
          if (project.difficultProject > efficiency) continue loop;
        }
      }
    }
  }
  
  checkWorkSpace() {
    console.log('this mob department');
    console.log(this.workSpace);
    for (let project of this.workSpace.keys()) {
      let arrDeveloper = this.workSpace.get(project);
      let efficiency = 0;
      console.log(project);
      for (let i = 0; i < arrDeveloper.length; i++) {
        console.log(arrDeveloper[i].workDays);
        efficiency += arrDeveloper[i].workDays;
      }
      if (efficiency > project.difficultProject) console.log('AAAAAAAAAAAAAAAALLLLLLLLLLLLLLLLLLLLAAAAAAAAAAAAAAAAAAAARRRRRRRRRRRRRRRRRRRRRRRMMMMMMMMMMMMMMMMM');
      if (project.difficultProject = efficiency) {
        for (let developer of arrDeveloper)  {
          developer.setWorkDays(0);
          developer.setCountProject();
          this.listWaitDev.push(developer);
        }
        this.workSpace.delete(project);
        this.setCountFinishedProject(); 
        this.countWaitDays = 0;
        let difficultProject = 1;
        project = new TestProject(difficultProject);
        console.log(project);
        testDepartment.listWaitProject.push(project); // и добавляем его в массив мобильных проектов созданных этим днем
        testDepartment.setCountComingProject();
        console.log(testDepartment.getCountComingProject());
      } else {
        if (arrDeveloper[1] != undefined) {
          let freedomDeveloper = arrDeveloper.pop();
          freedomDeveloper.setCountProject();
          this.listWaitDev.push(freedomDeveloper);
        }
        
        arrDeveloper = arrDeveloper.splice(1);
        if(arrDeveloper[0] != undefined) {
          arrDeveloper[0].setWorkDays(1);
        }
        
        this.setCountWaitDays();
      }
    }
  }
}

class TestDepartment extends Department {

  constructor() {
    super();
    this.typeDepartment = 'TEST';
  }
  
  fillWorkSpace() { // организовываем рабочее пространство (наполняем мапу)
    let length = (this.listWaitProject.length <= this.listWaitDev.length) ? this.listWaitProject.length : this.listWaitDev.length;
    for (let i = 0; i < length; i++) {
      let project = this.listWaitProject.shift();
      let developer = this.listWaitDev.shift();
      this.workSpace.set(project, developer);
    }
  }

  checkWorkSpace() {
    console.log('this test department');
    console.log(this.workSpace);
    for (let project of this.workSpace.keys()) {
      let developer = this.workSpace.get(project);
      console.log(project);
      developer.setCountProject();
      console.log(developer);
      this.listWaitDev.push(developer);
      this.setCountFinishedProject();
      this.workSpace.delete(project);  
    }
  }
  
}

let sortFunc = (a, b) => {a.countProject - b.countProject}

class Project {
  difficultProject
  constructor (difficultProject) {
    this.difficultProject = difficultProject;
  }

  get difficultProject() {
    return this.difficultProject;
  }
}

class WebProject extends Project {
  typeProject
  constructor(difficultProject) {
    super(difficultProject);
    this.typeProject = 'WEB';
  }
  
}

class MobilProject extends Project {
  typeProject
  constructor(difficultProject) {
    super(difficultProject);
    this.typeProject = 'MOBIL';
  }
}

class TestProject extends Project {
  typeProject
  constructor(difficultProject) {
    super(difficultProject);
    this.typeProject = 'TEST';
  }
}

class Dev {
  countProject
  workDays
  
  constructor() {
    this.countProject = 0;
    this.workDays = 0;
  }

  get countProject() {
    return this.countProject;
  }

  setCountProject() {
    this.countProject += 1;
  }

  get workDays() {
    return this.workDays;
  }

  setWorkDays(arg) {
    if (arg === 0) {
      this.workDays = 0;
    } else {
      this.workDays += 1;
    }
  }
}

class MobDev extends Dev {
  constructor() {
    super();
  }
}

class WebDev extends Dev {
  constructor() {
    super();
  }
}

class TestDev extends Dev {
  constructor() {
    super();
  }
}

class TeamLead {

  // Метод служит для проверки очереди накопившихся проектов
  checkStack(department) {
    let typeProject = department.typeDepartment;
    if (department.listWaitProject.length > 0) {
      for (let i = 0; i < department.listWaitProject.length; i++) {
        department.listWaitDev.push(this.hireDev(typeProject));
        department.setCountHireDev();
      }
    } 
  }

  // Метод найма программиста  --- проверен/исправен
  hireDev(typeProject) {
    let dev;
    switch (typeProject) {
      case 'WEB':
        dev = new WebDev();
        break;
      case 'MOBIL':
        dev = new MobDev();
        break;
      case 'TEST':
        dev = new TestDev();
        break;
    }
  
    return dev;
  }

  getProjects() {
    let typeProject = chooseTypeProject();  // возвращает 'MOBIL' или 'WEB'
    console.log('typeProject   ' + typeProject);
    let quantityProjects = chooseQuantityProjects(); // возвращает целое число от 0 до 4
    console.log('quantityProjects   ' + quantityProjects);
    console.log('_______________________________________________________________________________________________________');
    // Прогоняем цикл на создание проектов в зависимости от количества проектов. Если количество проектов равно нуля - цикл не запускается.
    for (let i = 0; i < quantityProjects; i++) {
      let difficultProject = chooseDifficultProject(); // возвращает сложность для каждого проекта от 1 до 3
      console.log('difficultProject   ' + difficultProject);
      if (typeProject === 'WEB') { // если тип проекта веб
        let project = new WebProject(difficultProject); // создаем новый веб проект с определенной выше сложностью
        console.log(project);
        webDepartment.listWaitProject.push(project); // и добавляем его в массив веб проектов созданных этим днем
        webDepartment.setCountComingProject();
        console.log(webDepartment.getCountComingProject());
      } 
      if (typeProject === 'MOBIL') { // если тип проекта мобильный
        let project = new MobilProject(difficultProject); // создаем новый мобильный проект с определенной выше сложностью
        console.log(project);
        mobilDepartment.listWaitProject.push(project); // и добавляем его в массив мобильных проектов созданных этим днем
        mobilDepartment.setCountComingProject();
        console.log(mobilDepartment.getCountComingProject());
      }
    }
  }

    // Метод увольнения программиста
  removeDev(department) {
    // Мне жалко увольнять прогеров, на их месте могу быть я =(
    department.listWaitDev.shift();
    department.setCountRemoveDev();
  }
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

//____________________________________________________________________________________________________________________________________________________________________________
// Zona otladki
let teamLead = new TeamLead();
let webDepartment = new WebDepartment();
let mobilDepartment = new MobilDepartment();
let testDepartment= new TestDepartment();







console.log(webDepartment);
console.log(mobilDepartment);
console.log(testDepartment);





if (webDepartment.workSpace.size  !== 0) {
  console.log('Апасностеее');
} else {
  console.log('All right');
}
workingOffice(15);

function workingOffice(days) {

  for (let i = 1; i <= days; i++) {
    // Начало рабочего дня
    console.log(`new work day ${i}`);
    console.log('Массив ожидающих программистов в начале итерации');
    console.log(webDepartment.listWaitDev);
    console.log('Массив ожидающих проектов в начале итерации');
    console.log(webDepartment.listWaitProject);
    console.log('Массив ожидающих программистов в начале итерации');
    console.log(mobilDepartment.listWaitDev);
    console.log('Массив ожидающих проектов в начале итерации');
    console.log(mobilDepartment.listWaitProject);
    console.log('Массив ожидающих программистов в начале итерации');
    console.log(testDepartment.listWaitDev);
    console.log('Массив ожидающих проектов в начале итерации');
    console.log(testDepartment.listWaitProject);
    // Проверяем наличие законченных проектов и переводим освободившихся программистов в список простоя
    //office.forEach(department => department.checkWorkSpace());
    console.log('Проверка выполненных проектов веб отдела');
    webDepartment.checkWorkSpace();
    console.log('Проверка выполненных проектов моб отдела');
    mobilDepartment.checkWorkSpace();
    console.log('Проверка выполненных проектов тест отдела');
    testDepartment.checkWorkSpace();


    // Отправляем в работу оставшиеся со вчера проекты и освободившихся разработчиков
    //office.forEach(department => department.fillWorkSpace());
    console.log('Наполнение наличными проектами и свободными программистами рабочей зоны');
    webDepartment.fillWorkSpace();
    mobilDepartment.fillWorkSpace();
    testDepartment.fillWorkSpace();

    // Проверяем наличие проектов в списке ожидания и нанимаем на них программистов
    //office.forEach(department => teamLead.checkStack(department));
    console.log('Наполнение оставшимися проектами и наем новых программистов');
    teamLead.checkStack(webDepartment);
    teamLead.checkStack(mobilDepartment);
    teamLead.checkStack(testDepartment);
    console.log('Массив ожидающих программистов до генерации');
    console.log(webDepartment.listWaitDev);
    console.log('Массив ожидающих проектов до генерации');
    console.log(webDepartment.listWaitProject);
    console.log('Массив ожидающих программистов до генерации');
    console.log(mobilDepartment.listWaitDev);
    console.log('Массив ожидающих проектов до генерации');
    console.log(mobilDepartment.listWaitProject);
    console.log('Массив ожидающих программистов до генерации');
    console.log(testDepartment.listWaitDev);
    console.log('Массив ожидающих проектов до генерации');
    console.log(testDepartment.listWaitProject);

    // Директор генерирует новые проекты
    console.log('шаг генерации новых проектов');
    teamLead.getProjects();


    // Отправляем в работу новые проекты со свободными разработчиками
    //office.forEach(department => department.fillWorkSpace());
    console.log('заполнение сгенерированных проектов свободными программистами');
    webDepartment.fillWorkSpace();
    mobilDepartment.fillWorkSpace();
    testDepartment.fillWorkSpace();
    console.log('Массив ожидающих программистов после заполнения свободными  программистами');
    console.log(webDepartment.listWaitDev);
    console.log('Массив ожидающих проектов после заполнения свободными  программистами');
    console.log(webDepartment.listWaitProject);
    console.log('Массив ожидающих программистов после заполнения свободными  программистами');
    console.log(mobilDepartment.listWaitDev);
    console.log('Массив ожидающих проектов после заполнения свободными  программистами');
    console.log(mobilDepartment.listWaitProject);
    console.log('Массив ожидающих программистов после заполнения свободными  программистами');
    console.log(testDepartment.listWaitDev);
    console.log('Массив ожидающих проектов после заполнения свободными  программистами');
    console.log(testDepartment.listWaitProject);
    // Сортируем списки простоя программистов по количеству проектов
    // office.forEach(department => department.sortListWaitDev());
    console.log('сортируем список ожидающих программистов по количеству выполненных проектов');
    webDepartment.sortListWaitDev();
    mobilDepartment.sortListWaitDev();
    testDepartment.sortListWaitDev();

    // Проверяем необходимость увольнения программистов
    // office.forEach(department => checkNeedRemoveDev(department));
    console.log('выполняем проверку необходимости увольнения прграммистов');
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
  // ${webDepartment.getCountComingProject()} веб проектов,
  // ${mobilDepartment.getCountComingProject()} мобильных проектов,
  // и успешно завершено ${testDepartment.getCountFinishedProject()} проектов. 
  // А также нанято ${webDepartment.getCountHireDev()} и уволено ${webDepartment.getCountRemoveDev()} веб-разработчиков,
  //         нанято ${mobilDepartment.getCountHireDev()} и уволено ${mobilDepartment.getCountRemoveDev()} мобильных разработчиков,
  //         нанято ${testDepartment.getCountHireDev()} и уволено ${testDepartment.getCountRemoveDev()} QA специалистов.`);
}
