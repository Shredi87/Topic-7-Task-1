import { addWebProject, addMobilProject } from "./concreteFactory.js";

export function generateProjects() {
  let typeProject = chooseTypeProject();  // возвращает 'MOBIL' или 'WEB'
  let quantityProjects = chooseQuantityProjects(); // возвращает целое число от 0 до 4
  // Прогоняем цикл на создание проектов в зависимости от количества проектов. Если количество проектов равно нуля - цикл не запускается.
  for (let i = 0; i < quantityProjects; i++) {
    let difficultProject = chooseDifficultProject(); // возвращает сложность для каждого проекта от 1 до 3
    return (typeProject === 'WEB') ? addWebProject(difficultProject) : addMobilProject(difficultProject);
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