import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { SubmitData } from "../../types/submit-data";

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
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<SubmitData>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCloseForm() {
    this.close.emit();
  }

  onSubmit() {
    this.submit.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    })
  }
}
