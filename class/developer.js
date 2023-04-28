class Dev {
  #countProject

  get countProject() {
    return this.#countProject;
  }

  set countProject(countProject) {
    this.#countProject = countProject++;
  }
}

class MobDev extends Dev {

}

class WebDev extends Dev {

}

class TestDev extends Dev {

}