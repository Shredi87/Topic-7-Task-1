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
    

}

export let webDepartment = new WebDepartment();
export let mobilDepartment = new MobilDepartment();
export let testDepartment= new TestDepartment();
