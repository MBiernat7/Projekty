import { Injectable } from '@angular/core';
import { Task } from './task';
import { TASKS } from './taskdata';
import { TASKSDONE } from './taskdone';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  searchTextSource = new Subject<string>();

  constructor() { }

  getTasks(): Task[] {
    return TASKS;
  }

  getTasksDone(): Task[] {
    return TASKSDONE;
  }
}
