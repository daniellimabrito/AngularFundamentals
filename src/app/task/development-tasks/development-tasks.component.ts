import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { LogService } from 'src/app/shared/log.service';

@Component({
  selector: 'app-development-tasks',
  templateUrl: './development-tasks.component.html',
  styleUrls: ['./development-tasks.component.css'],
  providers: [TasksService]

})
export class DevelopmentTasksComponent implements OnInit {

  title = 'DEVELOPMENT';
  selected :any;
  tasks: string[] = [];
  task: string;
  status: boolean = false;

  constructor(private taskService: TasksService, private logService: LogService) { }


  ngOnInit() {
    this.getTasks();

    TasksService.moveTaskToDev.subscribe(
      taskCreated => this.tasks.push(taskCreated)
    );
    // this.logService.consoleLog(`Backlog Event onInit - [value: ${this.task}]`);
  }

  getTasks() {
    this.tasks = this.taskService.getDevTasks();
  }

  onClickAdd(task: string) {
      this.taskService.moveTask(task, 'Dev');
    //  this.taskService.addTask(task);
   //   this.tasks.push(task);

  }

  onClickDelete(i: number, task: string) {
   // this.taskService.removeTask(task);
   const index: number = this.tasks.indexOf(task);
   if (index !== -1) {
      this.status = !this.status;
   }
  } 

}
