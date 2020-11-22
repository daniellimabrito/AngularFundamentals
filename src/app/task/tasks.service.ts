import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable()
export class TasksService {
    tasks: string[] = ['AAA'];

    DevTasks: string[] = ['BBB'];
    DoneTasks: string[] = ['CCC'];


    constructor(private logService: LogService) {
    }

    emitterTaskAdded = new EventEmitter<string>();
    //emitterTaskRemoved = new EventEmitter<string>();
    static newTaskCreated = new EventEmitter<string>();


    addTask(task: string) {
        this.logService.consoleLog(`Adding a new task: ${task}`);
        this.tasks.push(task);

        this.emitterTaskAdded.emit(task);
        TasksService.newTaskCreated.emit(task);

        this.logService.consoleLog(this.tasks);
    }
/*
    moveTask(task: string, status: string) {
        let val = status; // == 'Dev' ? status : 'Done';

        if (val == 'Dev')
        {
            this.DevTasks.push(task);
            TasksService.moveTaskToDev.emit(task);
            TasksService.removeTaskFromBacklog.emit(task);
            TasksService.removeTaskFromDone.emit(task);
            this.logService.consoleLog(`Moving task ${task} forward to ${val}`);
        }
        else if (val == 'Done') 
        {
            this.DoneTasks.push(task);
            TasksService.moveTaskToDone.emit(task);
            TasksService.removeTaskFromDev.emit(task);
            this.logService.consoleLog(`Moving task ${task} forward to ${val}`);
        }
        else if (val == 'Backlog') {
            this.tasks.push(task);
            TasksService.removeTaskFromDev.emit(task);
            this.logService.consoleLog(`Moving task ${task} forward to ${val}`);
        }
        else{
            this.logService.consoleLog(`Status not found`);
        }        

    }    

    removeTask(msg: string, type: string) {
        const index: number = this.tasks.indexOf(msg);
        if (index !== -1) {
            this.logService.consoleLog(`Removing task ${msg} and type : ${type}`);
            this.logService.consoleLog(`Index ${index} and type : ${type}`);

            if (type == 'backlog') {
                this.tasks.splice(index, 1);
            } else if (type == 'dev') {
                this.DevTasks.splice(index, 1);
            } else if (type == 'done') {
                this.DoneTasks.splice(index, 1);
            }
            else{
                this.logService.consoleLog(`Type not found`);
            }
        }
    }
*/
    getTasks() {
        return this.tasks;
    }

    getDevTasks() {
        return this.DevTasks;
    }
    getDoneTasks() {
        return this.DoneTasks;
    }    
}
