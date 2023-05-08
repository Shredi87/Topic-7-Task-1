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
    for (let project of this.workSpace.keys()) {
      let developer = this.workSpace.get(project);
      if (project.difficultProject === developer.workDays) {   
        developer.setCountProject();
        developer.setWorkDays(0);     
        this.listWaitDev.push(developer);
        this.workSpace.delete(project);
        this.setCountFinishedProject(); 
        this.countWaitDays = 0;
        let difficultProject = 1;
        project = new TestProject(difficultProject);
        testDepartment.listWaitProject.push(project); // и добавляем его в массив мобильных проектов созданных этим днем
        testDepartment.setCountComingProject();
      } else {
        developer.setWorkDays(1);
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
        if (Array.isArray(developer)) developer = developer[0];
        developer.setWorkDays(1);
        let arrDeveloper = [];
        arrDeveloper[0] = developer;
        this.workSpace.set(project, arrDeveloper);
      }

      loop:
      for (let project of this.workSpace.keys()) {
        if (this.listWaitDev.length > 0) {
          let arrDeveloper = this.workSpace.get(project);
          let additionalDeveloper = this.listWaitDev.pop();
          if (Array.isArray(additionalDeveloper)) additionalDeveloper = additionalDeveloper[0];
          additionalDeveloper.setWorkDays(1);
          arrDeveloper = arrDeveloper.concat(additionalDeveloper);
          let efficiency;
          for (let i = 0; i < arrDeveloper.length; i++) {
            efficiency += arrDeveloper[i].workDays;
          }
          if (project.difficultProject > efficiency) continue loop;
        }
      }
    }
  }
  
  checkWorkSpace() {
    for (let project of this.workSpace.keys()) {
      let arrDeveloper = this.workSpace.get(project);
      let efficiency = 0;
      for (let i = 0; i < arrDeveloper.length; i++) {
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
        testDepartment.listWaitProject.push(project); // и добавляем его в массив мобильных проектов созданных этим днем
        testDepartment.setCountComingProject();
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
    for (let project of this.workSpace.keys()) {
      let developer = this.workSpace.get(project);
      developer.setCountProject();
      this.listWaitDev.push(developer);
      this.setCountFinishedProject();
      this.workSpace.delete(project);  
    }
  }
  
}

let sortFunc = (a, b) => {a.countProject - b.countProject};

export let webDepartment = new WebDepartment();
export let mobilDepartment = new MobilDepartment();
export let testDepartment= new TestDepartment();

