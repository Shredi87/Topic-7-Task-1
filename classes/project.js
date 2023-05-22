class Project {
  difficultProject
  constructor (difficultProject) {
    this.difficultProject = difficultProject;
  }

  getDifficultProject() {
    return this.difficultProject;
  }
}

export class WebProject extends Project {
  typeProject
  constructor(difficultProject) {
    super(difficultProject);
    this.typeProject = 'WEB';
  }
  
}

export class MobilProject extends Project {
  typeProject
  constructor(difficultProject) {
    super(difficultProject);
    this.typeProject = 'MOBIL';
  }
}

export class TestProject extends Project {
  typeProject
  constructor(difficultProject) {
    super(difficultProject);
    this.typeProject = 'TEST';
  }
}

