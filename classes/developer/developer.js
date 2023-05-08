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

export class MobDev extends Dev {
  constructor() {
    super();
  }
}

export class WebDev extends Dev {
  constructor() {
    super();
  }
}

export class TestDev extends Dev {
  constructor() {
    super();
  }
}

export class DevFacade {
  constructor(dev) {
    this.dev = dev;
  }
  
  upCount() {
    this.dev.setCountProject();
    this.dev.setWorkDays(0);
  }

  upDays() {
    this.dev.setWorkDays(1);
  }
}