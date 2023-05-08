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