class Department {
  listWaitProject // очередь ожидающих проектов
  workSpace // список проектов в работе
  listWaitDev // список простаивающих программистов
  #countWaitDays // счетчик дней простоя программистов
  typeDepartment // тип отдела
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

  fillWorkSpace() { // организовываем рабочее пространство (наполняем мапу)
    let length = (this.listWaitProject.length >= this.listWaitDev.length) ? this.listWaitProject.length : this.listWaitDev.length;
    for (let i = 0; i < length; i++) {
      this.listWaitDev[i].setWorkDay();
      this.workSpace.set(this.listWaitProject[i], this.listWaitDev[i]);
    }
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

class WebDepartment extends Department {
  #typeDepartment
  constructor() {
    super();
    this.#typeDepartment = 'WEB';
  }
  
  checkWorkSpace() {
    for (let [project, developer] of this.workSpace) {
      if (project.difficultProject === developer.getWorkDay()) {
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

class MobilDepartment extends Department {
  #typeDepartment
  constructor() {
    super();
    this.#typeDepartment = 'MOBIL';
  }

  fillWorkSpace() { // организовываем рабочее пространство (наполняем мапу)
    let length = (this.listWaitProject.length >= this.listWaitDev.length) ? this.listWaitProject.length : this.listWaitDev.length;
    
    for (let i = 0; i < length; i++) {
      this.listWaitDev[i].setWorkDay();
      this.workSpace.set(this.listWaitProject[i], [this.listWaitDev[i]]);
    }
  
    if (this.listWaitDev.length > 0) {
      for (let i = 0; i < this.listWaitDev.length; i++) {
        for (let [project, developer] of this.workSpace.keys()) {
          let addDev = () => {
            this.workSpace.set(project, developer.push(this.listWaitDev.shift()));
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
      if (project.difficultProject === developer.getWorkDay()) {
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

class TestDepartment extends Department {
  #typeDepartment
  constructor() {
    super();
    this.#typeDepartment = 'TEST';
  }
  
  checkWorkSpace() {
    for (let project of this.workSpace.keys()) {
      let developer = this.workSpace.get(project);
      developer.setCountProject();
      this.listWaitDev.push(developer);
      this.setCountFinishedProject()
      this.workSpace.delete(project);  
    }
  }

}

let webDepartment = new WebDepartment();
let mobilDepartment = new MobilDepartment();
let testDepartment= new TestDepartment();
export let office = [webDepartment, mobilDepartment, testDepartment];