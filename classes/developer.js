class Dev {
  #countProject
  
  constructor() {
    this.#countProject = 0;
  }

  getCountProject() {
    return this.#countProject;
  }

  setCountProject() {
    this.#countProject += 1;
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