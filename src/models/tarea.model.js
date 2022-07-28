//importamos el objeto level
import { LEVEL } from './level';

//clase modelo de la tarea con los campos que se requieren name, description, completed, level
export class TareaModel {
  name = '';
  description = '';
  completed = false;
  level = LEVEL.NORMAL;

  constructor(name, description, completed, level){
    this.name = name;
    this.description = description;
    this.completed = completed;
    this.level = level
  }
}
