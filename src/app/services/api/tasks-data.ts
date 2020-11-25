import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from '../../models/task';

const INITIAL_ID = 1;

export class TasksData implements InMemoryDbService {
  createDb() {
    const tasks: Task[] = [
      {
        id: 1,
        title: 'TASK 1',
       // isDone: false,
       // isPrivate: true,
      },
      {
        id: 2,
        title: 'TASK 2',
       // isDone: false,
      },
      {
        id: 3,
        title: 'TASK 3',
      //  isDone: true,
      //  isBusiness: true,
      },
    ];
    return { tasks };
  }

  genId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : INITIAL_ID;
  }
}
