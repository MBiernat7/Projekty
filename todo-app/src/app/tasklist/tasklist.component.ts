import { Component, Input, OnInit } from '@angular/core';
import {Task} from '../task';
import { TASKS } from '../taskdata';
import { TASKSDONE } from '../taskdone';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  @Input() tasks: Task[] = TASKS;
  @Input() tasksdone: Task[] = TASKSDONE;
  task: Task = {name: '', deadline: '', done: false};

  constructor() { }

  ngOnInit(): void {
  }

  markAsDone(i: number, task: Task) {
    this.tasks.splice(i, 1);
    this.task = task;
    task.done = true;
    this.tasksdone.push(this.task);
  }

  deleteTask(i: number) {
    this.tasks.splice(i, 1);
  }

  deleteTaskDone(i: number) {
    this.tasksdone.splice(i, 1);
  }

}
