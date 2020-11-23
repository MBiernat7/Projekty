import { Component, Inject, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../task';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  task: Task = {name: '', deadline: '', done: false};
  tasks: Task[] = this.taskService.getTasks()

  constructor(private taskService: TaskService, public dialogRef: MatDialogRef<EditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Task) { }

  ngOnInit(): void {
    this.getTasks();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getTasks(): void {
    this.taskService.getTasks();
  }

}
