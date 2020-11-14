import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Task} from '../task'

@Component({
  selector: 'app-taskinput',
  templateUrl: './taskinput.component.html',
  styleUrls: ['./taskinput.component.css']
})
export class TaskinputComponent implements OnInit {
  @Output() newTask = new EventEmitter<Task>();
  task: Task = {name: '', deadline: '', done: false};

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    this.newTask.emit(this.task);
    this.task = {name: '', deadline: '', done: false};
  }

}
