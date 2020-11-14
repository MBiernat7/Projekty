
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import {Task} from '../task';
import { TASKS } from '../taskdata';
import { TASKSDONE } from '../taskdone';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  @Output() markDone = new EventEmitter<Task>();
  @Input() tasks: Task[] = TASKS;
  task: Task = {name: '', deadline: '', done: false};

  constructor() { }

  ngOnInit(): void {
  }

  markAsDone(task: Task) {
    this.task.done = true;
    this.markDone.emit(this.task);
  }

}
