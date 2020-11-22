import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../../shared/log.service';
import { DoneService } from '../done-tasks/done.service';



@Injectable({
  providedIn: 'root'
})
export class DevelopmentService {
  tasks: string[] = ['BBB'];

  static moveTask = new EventEmitter<string>();
  static removeTask = new EventEmitter<string>();
  
constructor(private logService: LogService) { }

moveTask(task: string) {

      this.tasks.push(task);
      this.removeTask(task);
      DoneService.moveTask.emit(task);

      this.logService.consoleLog(`Moving task ${task} on DevelopmentService`);
}    

removeTask(msg: string) {
  const index: number = this.tasks.indexOf(msg);
  if (index !== -1) {
      this.logService.consoleLog(`Removing task ${msg} on DevelopmentService`);    
      this.tasks.splice(index, 1);
  }
}

getTasks() {
  return this.tasks;
}

}
