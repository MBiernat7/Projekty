import { Component, OnInit } from '@angular/core';
import {Task} from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  tasks: Task[] = this.taskService.getTasks();
  tasksdone: Task[] = this.taskService.getTasksDone();
  task: Task = {name: '', deadline: '', done: false};
  searchText: string;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks()
    this.taskService.searchTextSource.subscribe((searchText: string) => this.searchText = searchText)
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

  editTask() {

  }

  getTasks(): void {
    this.taskService.getTasks();
  }

  getTasksDone(): void {
    this.taskService.getTasksDone();
  }

}
