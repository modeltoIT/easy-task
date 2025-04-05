import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { SubmitData } from "../../types/submit-data";
import { TasksService } from "../tasks/tasks.service";

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TasksService);

  onCloseForm() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    },
      this.userId)

    this.close.emit();
  }
}
