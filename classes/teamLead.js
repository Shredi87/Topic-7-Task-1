import {WebProject, MobilProject} from './project.js';
import {chooseTypeProject, chooseQuantityProjects, chooseDifficultProject} from '../func.js';
import {webDepartment, mobilDepartment, testDepartment} from './department.js';
import { MobDev, WebDev, TestDev } from './developer.js';


export class teamLead {

  // Метод служит для проверки очереди накопившихся проектов
  checkStack(stack) {
    let typeProject;
    switch (stack) {
      case WAIT_STACK_WEB:
        typeProject = 'WEB';
        break;
      case WAIT_STACK_MOBIL:
        typeProject = 'MOBIL';
        break;
      case WAIT_STACK_TEST:
        typeProject = 'TEST';
        break;
    }
    if (stack.length > 0) {
      for (let i = 0; i < stack.length; i++) {
        hireDev(typeProject);
      }
    } 
  }

  // Метод найма программиста
  hireDev(typeProject) {
    
  }

  // Метод увольнения программиста
  removeDev(typeProject) {

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
}

