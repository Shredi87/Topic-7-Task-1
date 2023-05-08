class Project {
  difficultProject
  constructor (difficultProject) {
    this.difficultProject = difficultProject;
  }

  get difficultProject() {
    return this.difficultProject;
  }
}

class WebProject extends Project {
  typeProject
  constructor(difficultProject) {
    super(difficultProject);
    this.typeProject = 'WEB';
  }
  
}

class MobilProject extends Project {
  typeProject
  constructor(difficultProject) {
    super(difficultProject);
    this.typeProject = 'MOBIL';
  }
}

class TestProject extends Project {
  typeProject
  constructor(difficultProject) {
    super(difficultProject);
    this.typeProject = 'TEST';
  }
}

