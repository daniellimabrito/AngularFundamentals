import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { LogService } from 'src/app/shared/log.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
  providers: [TasksService]
})
export class CreateTaskComponent implements OnInit {

  constructor(private taskService: TasksService, private logService: LogService) { }

  ngOnInit() {
  }

  onAddTaskClick(task: string) {
    this.logService.consoleLog(`Event onAddTaskClick - [value: ${task}]`);
    this.taskService.addTask(task);
  }

}
