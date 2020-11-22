import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../../shared/log.service';


@Injectable({
  providedIn: 'root'
})
export class DoneService {
  tasks: string[] = ['CCC'];

  static moveTask = new EventEmitter<string>();
  static removeTask = new EventEmitter<string>();
  
constructor(private logService: LogService) { }

moveTask(task: string) {

      this.tasks.push(task);
      this.removeTask(task);
      //DevelopmentService.moveTask.emit(task);

      this.logService.consoleLog(`Moving task ${task} on DoneService`);    

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
