class Department {
  listWaitProject // очередь ожидающих проектов
  listWorkingProject // список проектов в работе
  listWaitingDev // список простаивающих программистов

  constructor() {
    this.listWaitProject = [];
    this.listWorkingProject = [];
    this.listWaitingDev = [];
  }
}

class WebDepartment extends Department {
  constructor() {
    super();
  }
    
}

class MobilDepartment extends Department {
  constructor() {
    super();
  }

}

class TestDepartment extends Department {
  constructor() {
    super();
  }

}

export let webDepartment = new WebDepartment();
export let mobilDepartment = new MobilDepartment();
export let testDepartment= new TestDepartment();

