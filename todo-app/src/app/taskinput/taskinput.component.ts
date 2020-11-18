import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Task} from '../task'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TASKS } from '../taskdata';

@Component({
  selector: 'app-taskinput',
  templateUrl: './taskinput.component.html',
  styleUrls: ['./taskinput.component.css']
})
export class TaskinputComponent implements OnInit {
  @Output() newTask = new EventEmitter<Task>();
  task: Task = {name: '', deadline: '', done: false};

  taskForm = new FormGroup({
    taskName: new FormControl('', [Validators.minLength(5), Validators.required]),
    taskDeadline: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    if (TASKS.find(e => e.name === this.task.name)) {
      this.task = {name: '', deadline: '', done: false};
      return alert("Taki task już istnieje!");

    };
    this.newTask.emit(this.task);
    this.task = {name: '', deadline: '', done: false};
  }

}
