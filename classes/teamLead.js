import { WebProject, MobilProject } from './project.js';
import { chooseTypeProject, chooseQuantityProjects, chooseDifficultProject, sortFunc } from '../func.js';
import { webDepartment, mobilDepartment } from './department.js';
import { MobDev, WebDev, TestDev } from './developer.js';


class TeamLead {

  // Метод служит для проверки очереди накопившихся проектов
  checkStack(department) {
    let typeProject = department.typeDepartment;
    if (department.listWaitProject.length > 0) {
      for (let i = 0; i < department.listWaitProject.length; i++) {
        department.listWaitDev.push(hireDev(typeProject));
        department.setCountHireDev();
      }
    } 
  }

  // Метод найма программиста
  hireDev(typeProject) {
    let dev;
    if (typeProject = 'WEB') {
      dev = new WebDev();
    }
    if (typeProject = 'MOBIL') {
      dev = new MobDev();
    }
    if (typeProject = 'TEST') {
      dev = new TestDev();
    }
    return dev;
  }

  // генерация новых проектов
  getProjects() {
    let typeProject = chooseTypeProject();  // возвращает 'MOBIL' или 'WEB'
    let quantityProjects = chooseQuantityProjects(); // возвращает целое число от 0 до 4
    // Прогоняем цикл на создание проектов в зависимости от количества проектов. Если количество проектов равно нуля - цикл не запускается.
    for (let i = 0; i < quantityProjects; i++) {
      let difficultProject = chooseDifficultProject(); // возвращает сложность для каждого проекта от 1 до 3
      if (typeProject === 'WEB') { // если тип проекта веб
        let project = new WebProject(difficultProject); // создаем новый веб проект с определенной выше сложностью
        webDepartment.listWaitProject.push(project); // и добавляем его в массив веб проектов созданных этим днем
      } else { // иначе тип проекта мобильный
        let project = new MobilProject(difficultProject); // создаем новый мобильный проект с определенной выше сложностью
        mobilDepartment.listWaitProject.push(project); // и добавляем его в массив мобильных проектов созданных этим днем
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


export let teamLead = new TeamLead();
