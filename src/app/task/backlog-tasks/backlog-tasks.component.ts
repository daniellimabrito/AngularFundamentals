import { Component, OnInit } from '@angular/core';
import { BacklogService } from './backlog.service';
import { TasksService } from '../tasks.service';
import { DevelopmentService } from '../development-tasks/development.service';


import { LogService } from 'src/app/shared/log.service';

@Component({
  selector: 'app-backlog-tasks',
  templateUrl: './backlog-tasks.component.html',
  styleUrls: ['./backlog-tasks.component.css'],
  providers: [BacklogService, TasksService, DevelopmentService]

})
export class BacklogTasksComponent implements OnInit {

  title = 'BACKLOG';
  selected :any;
  tasks: string[] = [];
  task: string;
  status: boolean = false;
  constructor(private backlogService: BacklogService, private taskService: TasksService, private logService: LogService) { }

  ngOnInit() {
    this.getTasks();

    TasksService.newTaskCreated.subscribe(
      taskCreated => this.tasks.push(taskCreated)
    );

    BacklogService.moveTask.subscribe(
      taskCreated => this.tasks.push(taskCreated)
    );

    BacklogService.removeTask.subscribe(
      taskCreated => this.backlogService.moveTask(taskCreated)
    );   

   // DevelopmentService.moveTask.subscribe(
   //   taskCreated => this.tasks.push(taskCreated)
   // );    
    // this.logService.consoleLog(`Backlog Event onInit - [value: ${this.task}]`);
  }

  select(item) {
    this.selected = item; 
  };
  isActive(item) {
      return this.selected === item;
  };

  getTasks() {
    this.tasks = this.taskService.getTasks();
  }

  onClickAdd(task: string) {
   // this.taskService.removeTask(task);

     this.backlogService.moveTask(task);
    //  this.taskService.addTask(task);
   //   this.tasks.push(task);

  }

  onClickDelete(i: number, task: string) {
    this.backlogService.removeTask(task);
  }
}
