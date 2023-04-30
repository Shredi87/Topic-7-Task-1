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

export let webDepartment = new WebDepartment();
export let mobilDepartment = new MobilDepartment();
export let testDepartment= new TestDepartment();
