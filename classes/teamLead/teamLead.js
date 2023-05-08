import { generateProjects } from "./abstractFactory.js";
import { hireDev } from "../developer/abstractFactory.js";

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

  getProjects() {
    generateProjects();
  }

    // Метод увольнения программиста
  removeDev(department) {
    // Мне жалко увольнять прогеров, на их месте могу быть я =(
    department.listWaitDev.shift();
    department.setCountRemoveDev();
  }
}

export let teamLead = new TeamLead();