class Department {
  listWaitProject // очередь ожидающих проектов
  listWorkingProject // список проектов в работе
  listWaitingDev // список простаивающих программистов
  #countWaitDays // счетчик дней простоя программистов
  typeDepartment // тип отдела

  constructor() {
    this.listWaitProject = [];
    this.listWorkingProject = [];
    this.listWaitingDev = [];
    this.#countWaitDays = 0;
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
