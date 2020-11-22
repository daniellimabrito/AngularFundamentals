import { Component, OnInit } from '@angular/core';
import { DoneService } from './done.service';
import { LogService } from 'src/app/shared/log.service';

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['./done-tasks.component.css'],
  providers: [DoneService]
})
export class DoneTasksComponent implements OnInit {

  title = 'DONE';
  selected :any;
  tasks: string[] = [];
  task: string;
  status: boolean = false;

  constructor(private taskService: DoneService, private logService: LogService) { }


  ngOnInit() {
    this.getTasks();

    DoneService.moveTask.subscribe(
      taskCreated => this.tasks.push(taskCreated)
    );

    DoneService.removeTask.subscribe(
      taskSelected => this.taskService.removeTask(taskSelected)
    );    

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
  }

}
