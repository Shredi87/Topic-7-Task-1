class Dev {
  #countProject
  #workDays
  
  constructor() {
    this.#countProject = 0;
    this.#workDays = 0;
  }

  get countProject() {
    return this.#countProject;
  }

  setCountProject() {
    this.#countProject += 1;
  }

  get workDay() {
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