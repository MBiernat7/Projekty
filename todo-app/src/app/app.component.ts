import { Component } from '@angular/core';
import {Task} from './task'
import { TASKS } from './taskdata';
import { TASKSDONE } from './taskdone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  tasks: Task[] = TASKS;
  tasksdone: Task[] = TASKSDONE;


  onNewTask(task: Task) {
    this.tasks.push(task);
  }

  onComplete(task: Task) {
    this.tasksdone.push(task);
  }
}
