import { WebProject, MobilProject } from "./project.js";
import { WebDev, MobDev, TestDev } from "./developer.js";
import { webDepartment, mobilDepartment } from "./department.js";

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
    let quantityProjects = chooseQuantityProjects(); // возвращает целое число от 0 до 4
    // Прогоняем цикл на создание проектов в зависимости от количества проектов. Если количество проектов равно нуля - цикл не запускается.
    for (let i = 0; i < quantityProjects; i++) {
      let difficultProject = chooseDifficultProject(); // возвращает сложность для каждого проекта от 1 до 3
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

// Функция-рандомайзер используется в соответствующих проектах для определения:
// 1. типов проектов (веб|мобильные) в функции chooseTypeProject
// 2. количества проектов (от 0 до 4) в функции chooseQuantityProjects
// 3. сложности проектов (от 1 до 3) для каждого проекта выбираются отдельно chooseDifficultProject
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// 1. Выбор типа проектов
// Тип проектов поступивших в один день может быть только веб или только мобильные
// где 0 - веб-проекты, а 1 - мобильные проекты.
function chooseTypeProject() {
  let typeProject = randomInteger(0, 1);
  return (typeProject === 1) ? 'MOBIL' : 'WEB';
}

// 2. Определение количества проектов
function chooseQuantityProjects() {
  let quantityProjects = randomInteger(0, 4);
  return quantityProjects;
}

// 3. Определение сложности каждого проекта
function chooseDifficultProject() {
  let difficultProject = randomInteger(1, 3);
  return difficultProject;
}

export let teamLead = new TeamLead();