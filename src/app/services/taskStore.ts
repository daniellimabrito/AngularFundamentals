import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Store } from '../shared/store';


interface TaskState {
    tasks: Task[];
}

const initialState: TaskState = { tasks: []} ;

@Injectable({
    providedIn: 'root',
})
export class TaskStore extends Store<TaskState>{
    
    
    constructor() {
        super(initialState);
        
    }
}
