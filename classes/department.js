class Department {
  listWaitProject // очередь ожидающих проектов
  listWorkingProject // список проектов в работе
  listWaitingDev // список простаивающих программистов
  typeDepartment // тип отдела

  constructor() {
    this.listWaitProject = [];
    this.listWorkingProject = [];
    this.listWaitingDev = [];
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
