import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from '../task'

@Component({
  selector: 'app-taskinput',
  templateUrl: './taskinput.component.html',
  styleUrls: ['./taskinput.component.css']
})
export class TaskinputComponent implements OnInit {
  task: Task = {name: '', deadline: '', done: false};
  tasks: Task[] = this.taskService.getTasks();

  taskForm = new FormGroup({
    taskName: new FormControl('', [Validators.minLength(5), Validators.required]),
    taskDeadline: new FormControl('', Validators.required),
  });

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks()
  }

  search(term: string) {
    this.taskService.searchTextSource.next(term);
  }

  addTask() {
    if (this.tasks.find(e => e.name === this.task.name)) {
      this.task = {name: '', deadline: '', done: false};
      return alert("Taki task już istnieje!");
    };
    this.tasks.push(this.task);
    this.task = {name: '', deadline: '', done: false};
  }

  getTasks(): void {
    this.taskService.getTasks();
  }

}
