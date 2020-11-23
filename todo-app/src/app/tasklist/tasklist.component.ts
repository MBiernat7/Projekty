import { Component, OnInit } from '@angular/core';
import {Task} from '../task';
import { TaskService } from '../task.service';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { JsonPipe } from '@angular/common';

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

  constructor(private taskService: TaskService, public dialog: MatDialog) { }

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

  editTask(task: Task): void {
    let dialogRef = this.dialog.open(EditDialogComponent, {data: {name: task.name, deadline: task.deadline, done: task.done}});

    dialogRef.afterClosed().subscribe(result => {
      task.name = result[0];
      task.deadline = result[1];
    })
  }

  getTasks(): void {
    this.taskService.getTasks();
  }

  getTasksDone(): void {
    this.taskService.getTasksDone();
  }

}
