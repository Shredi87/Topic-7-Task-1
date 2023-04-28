import {WAIT_STACK_WEB, WAIT_STACK_MOBIL, WAIT_STACK_TEST, EVERYDAY_STACK_WEB, EVERYDAY_STACK_MOBIL} from '../const.js';
import {WebProject, MobilProject} from './project.js';
import {chooseTypeProject, chooseQuantityProjects, chooseDifficultProject} from '../func.js';

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

  hireDev(typeProject) {

  }

  removeDev(typeProject) {

  }
  // генерация новых проектов
  getProjects() {
    let typeProject = chooseTypeProject();  // возвращает 'MOBIL' или 'WEB'
    let quantityProjects = chooseQuantityProjects(); // возвращает целое число от 0 до 4

    for (let i = 0; i < quantityProjects; i++) {
      let difficultProject = chooseDifficultProject(); // возвращает сложность для каждого проекта от 1 до 3
      if (typeProject === 'WEB') { // если тип проекта веб
        let project = new WebProject(difficultProject); // создаем новый веб проект с определенной выше сложностью
        EVERYDAY_STACK_WEB.push(project); // и добавляем его в массив веб проектов созданных этим днем
      } else { // иначе тип проекта мобильный
        let project = new MobilProject(difficultProject); // создаем новый мобильный проект с определенной выше сложностью
        EVERYDAY_STACK_MOBIL.push(project); // и добавляем его в массив мобильных проектов созданных этим днем
      }
    }

  }
}

