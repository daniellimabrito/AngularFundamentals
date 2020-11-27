import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Task } from '../models/task';
import { Filter } from '../models/filter';
import { Store } from '../shared/store';
import { TasksApiService } from "./api/tasks-api.service";


interface TaskState {
    tasks: Task[];
    selectedTaskId: number;
    filter: Filter;
}

const initialState: TaskState = { 
    tasks: [], 
    selectedTaskId: undefined,
    filter: {
        status: '',
    },
};

@Injectable({
    providedIn: 'root',
})
export class TaskStore extends Store<TaskState> {
    private tasksFiltered$: Observable<Task[]> = this.select((state) => {
        return getTasksFiltered(state.tasks, state.filter);
      });   
    
    constructor(private apiService: TasksApiService) {
        super(initialState);
        this.load();
    }

    tasksBacklog$: Observable<Task[]> = this.tasksFiltered$.pipe(
        map((tasks) => tasks.filter((task) => task.status == 'Backlog'))
    );  
 
    tasksDev$: Observable<Task[]> = this.tasksFiltered$.pipe(
        map((tasks) => tasks.filter((task) => task.status == 'Dev'))
    );      

    tasksDone$: Observable<Task[]> = this.tasksFiltered$.pipe(
        map((tasks) => tasks.filter((task) => task.status == 'Done'))
    );
    
    updateFilter(filter: Filter) {
        this.setState({
          filter: {
            ...this.state.filter,
            ...filter,
          },
        });
    }   

    
  // API CALLS
  load() {
    this.apiService.getTasks().subscribe((tasks) => this.setState({ tasks }));
  }
  /*
  create(task: Task) {
      this.apiService.createTask(task).subscribe((newTask) => {
          this.setState({
              tasks: [...this.state.tasks, newTask],
              selectedTaskId: newTask.id,
          });
      });
  }
  */

  update(task: Task) {
    this.apiService.updateTask(task).subscribe((updatedTask) => {
      this.setState({
        tasks: this.state.tasks.map((item) => (item.id === task.id ? updatedTask : item)),
      });
    });
  }  

}

function getTasksFiltered(tasks, filter): Task[] {
    return tasks.filter((item) => {
      return (
        item.title.toUpperCase().indexOf(filter.search.toUpperCase()) > -1);
    });
  }