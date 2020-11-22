import { Component, OnInit } from '@angular/core';
import { DevelopmentService } from './development.service';
import { LogService } from 'src/app/shared/log.service';
import { BacklogService } from '../backlog-tasks/backlog.service';


@Component({
  selector: 'app-development-tasks',
  templateUrl: './development-tasks.component.html',
  styleUrls: ['./development-tasks.component.css'],
  providers: [DevelopmentService, BacklogService]

})
export class DevelopmentTasksComponent implements OnInit {

  title = 'DEVELOPMENT';
  selected :any;
  tasks: string[] = [];
  task: string;
  status: boolean = false;

  constructor(private taskService: DevelopmentService, private backlogService: BacklogService, private logService: LogService) { }


  ngOnInit() {
    this.getTasks();

    DevelopmentService.moveTask.subscribe(
      taskCreated => this.tasks.push(taskCreated)
    );
  
    DevelopmentService.removeTask.subscribe(
      taskCreated => this.taskService.removeTask(taskCreated)
    );

  //  BacklogService.moveTask.subscribe(
  //    taskCreated => this.tasks.push(taskCreated)
  //  );

    this.logService.consoleLog(this.tasks);
    // this.logService.consoleLog(`Backlog Event onInit - [value: ${this.task}]`);
  }

  getTasks() {
    this.tasks = this.taskService.getTasks();
  }

  onClickAdd(task: string) {
      this.taskService.moveTask(task);
    //  this.taskService.addTask(task);
   //   this.tasks.push(task);

  }
  
  onClickDelete(i: number, task: string) {
    this.taskService.removeTask(task);
   const index: number = this.tasks.indexOf(task);
   if (index !== -1) {
      this.status = !this.status;
   }
  } 

  onClickMoveBack(task: string) {
    this.backlogService.moveTask(task);
  //  this.taskService.addTask(task);
 //   this.tasks.push(task);

}  

}
