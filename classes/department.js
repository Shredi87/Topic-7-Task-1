import { testDepartment } from "../func.js"

class Department {
  listWaitProject // очередь ожидающих проектов
  workSpace // список проектов в работе
  listWaitDev // список простаивающих программистов
  typeDepartment // тип отдела
  #countWaitDays // счетчик дней простоя программистов
  #countFinishedProject // количество законченных проектов
  #countHireDev // количество нанятых разработчиков
  #countRemoveDev // коичество уволенных разработчиков

  constructor() {
    this.listWaitProject = [];
    this.workSpace = new Map();
    this.listWaitDev = [];
    this.#countWaitDays = 0;
    this.#countFinishedProject = 0;
    this.#countHireDev = 0;
    this.#countRemoveDev = 0;
  }

  get countWaitDays() {
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
    this.listWaitDev = this.listWaitDev.sort(sortFunc);
  }

  getCountFinishedProject() {
    return this.#countFinishedProject;
  }

  setCountFinishedProject() {
    this.#countFinishedProject += 1;
  }

  getCountHireDev() {
    return this.#countHireDev;
  }

  setCountHireDev() {
    this.#countHireDev += 1;
  }

  getCountRemoveDev() {
    return this.#countRemoveDev;
  }

  setCountRemoveDev() {
    this.#countRemoveDev += 1;
  }
}

export class WebDepartment extends Department {

  constructor() {
    super();
    this.typeDepartment = 'WEB';
  }
  
  fillWorkSpace() { // организовываем рабочее пространство (наполняем мапу)
    let length = (this.listWaitProject.length <= this.listWaitDev.length) ? this.listWaitProject.length : this.listWaitDev.length;
    for (let i = 0; i < length; i++) {
      this.listWaitDev[i].setWorkDay();
      this.workSpace.set(this.listWaitProject[i], this.listWaitDev[i]);
    }
  }

  checkWorkSpace() {
    for (let [project, developer] of this.workSpace) {
      if (project.difficultProject === developer.workDay) {
        testDepartment.listWaitDev.push(project);
        this.listWaitDev.push(developer);
        this.workSpace.delete(project);
        developer.setCountProject();
        this.setCountFinishedProject(); 
      }

      this.setCountWaitDays();
    }
  }
}

export class MobilDepartment extends Department {

  constructor() {
    super();
    this.typeDepartment = 'MOBIL';
  }

  fillWorkSpace() { // организовываем рабочее пространство (наполняем мапу)
    let length = (this.listWaitProject.length <= this.listWaitDev.length) ? this.listWaitProject.length : this.listWaitDev.length;
    
    for (let i = 0; i < length; i++) {
      this.listWaitDev[i].setWorkDay();
      this.workSpace.set(this.listWaitProject[i], [this.listWaitDev[i]]);
    }
  
    if (this.listWaitDev.length > 0) {
      for (let i = 0; i < this.listWaitDev.length; i++) {
        for (let [project, developer] of this.workSpace) {
          let addDev = () => {
            let moveDev = this.listWaitDev.shift(); 
            this.workSpace.set(project, developer.push(moveDev));
          };
          switch (project.difficultProject - 1) {
            case 0:
              break;
            case 1:
              addDev();
              break;
            case 2:
              if (this.listWaitDev.length = 2) {
                addDev();
              } 
              addDev();
              break;
          } 
          
        }
      }
    }
  }
  
  checkWorkSpace() {
    for (let [project, developer] of this.workSpace) {
      if (project.difficultProject === developer.workDay) {
        testDepartment.listWaitDev.push(project);
        this.listWaitDev.push(developer);
        this.workSpace.delete(project);
        developer.setCountProject();
        this.setCountFinishedProject()  
      }

      this.setCountWaitDays();
    }
  }
}

export class TestDepartment extends Department {

  constructor() {
    super();
    this.typeDepartment = 'TEST';
  }
  
  fillWorkSpace() { // организовываем рабочее пространство (наполняем мапу)
    let length = (this.listWaitProject.length <= this.listWaitDev.length) ? this.listWaitProject.length : this.listWaitDev.length;
    for (let i = 0; i < length; i++) {
      this.listWaitDev[i].setWorkDay();
      this.workSpace.set(this.listWaitProject[i], this.listWaitDev[i]);
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

let sortFunc = (a, b) => {a.countProject - b.countProject}
