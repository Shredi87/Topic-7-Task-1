class Dev {
  #countProject
  
  constructor() {
    this.#countProject = 0;
  }

  get countProject() {
    return this.#countProject;
  }

  set countProject(countProject) {
    this.#countProject = countProject++;
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