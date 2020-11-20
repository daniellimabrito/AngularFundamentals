import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { LogService } from 'src/app/shared/log.service';

@Component({
  selector: 'app-backlog-tasks',
  templateUrl: './backlog-tasks.component.html',
  styleUrls: ['./backlog-tasks.component.css'],
  providers: [TasksService]

})
export class BacklogTasksComponent implements OnInit {

  title = 'BACKLOG';
  selected :any;
  tasks: string[] = [];
  task: string;
  status: boolean = false;
  constructor(private taskService: TasksService, private logService: LogService) { }

  ngOnInit() {
    this.getTasks();

    TasksService.newTaskCreated.subscribe(
      taskCreated => this.tasks.push(taskCreated)
    );

    TasksService.moveTaskToDev.subscribe(
      taskCreated => this.tasks.push(taskCreated)
    );

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

     this.taskService.moveTask(task, 'Dev');
    //  this.taskService.addTask(task);
   //   this.tasks.push(task);

  }

  onClickDelete(i: number, task: string) {
    this.taskService.removeTask(task);
  }
}
