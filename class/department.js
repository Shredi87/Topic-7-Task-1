class Department {
  stackWait
  stackWorking
  listWaitingDev

  constructor() {
    this.stackWait = [];
    this.stackWorking = [];
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