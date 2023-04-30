class Dev {
  #countProject
  #workDays
  
  constructor() {
    this.#countProject = 0;
  }

  getCountProject() {
    return this.#countProject;
  }

  setCountProject() {
    this.#countProject += 1;
  }

  getWorkDay() {
    return this.#workDays;
  }

  setWorkDay() {
    this.#workDays += 1;
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