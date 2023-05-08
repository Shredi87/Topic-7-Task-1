class TeamLead {

  // Метод служит для проверки очереди накопившихся проектов
  checkStack(department) {
    let typeProject = department.typeDepartment;
    if (department.listWaitProject.length > 0) {
      for (let i = 0; i < department.listWaitProject.length; i++) {
        department.listWaitDev.push(this.hireDev(typeProject));
        department.setCountHireDev();
      }
    } 
  }

  // Метод найма программиста  --- проверен/исправен
  hireDev(typeProject) {
    let dev;
    switch (typeProject) {
      case 'WEB':
        dev = new WebDev();
        break;
      case 'MOBIL':
        dev = new MobDev();
        break;
      case 'TEST':
        dev = new TestDev();
        break;
    }
  
    return dev;
  }

  getProjects() {
    let typeProject = chooseTypeProject();  // возвращает 'MOBIL' или 'WEB'
    console.log('typeProject   ' + typeProject);
    let quantityProjects = chooseQuantityProjects(); // возвращает целое число от 0 до 4
    console.log('quantityProjects   ' + quantityProjects);
    console.log('_______________________________________________________________________________________________________');
    // Прогоняем цикл на создание проектов в зависимости от количества проектов. Если количество проектов равно нуля - цикл не запускается.
    for (let i = 0; i < quantityProjects; i++) {
      let difficultProject = chooseDifficultProject(); // возвращает сложность для каждого проекта от 1 до 3
      console.log('difficultProject   ' + difficultProject);
      if (typeProject === 'WEB') { // если тип проекта веб
        let project = new WebProject(difficultProject); // создаем новый веб проект с определенной выше сложностью
        console.log(project);
        webDepartment.listWaitProject.push(project); // и добавляем его в массив веб проектов созданных этим днем
        webDepartment.setCountComingProject();
        console.log(webDepartment.getCountComingProject());
      } 
      if (typeProject === 'MOBIL') { // если тип проекта мобильный
        let project = new MobilProject(difficultProject); // создаем новый мобильный проект с определенной выше сложностью
        console.log(project);
        mobilDepartment.listWaitProject.push(project); // и добавляем его в массив мобильных проектов созданных этим днем
        mobilDepartment.setCountComingProject();
        console.log(mobilDepartment.getCountComingProject());
      }
    }
  }

    // Метод увольнения программиста
  removeDev(department) {
    // Мне жалко увольнять прогеров, на их месте могу быть я =(
    department.listWaitDev.shift();
    department.setCountRemoveDev();
  }
}