import { Component, Input } from '@angular/core';
import { User } from "../../types/user";
import { TaskComponent } from "../task/task.component";
import { DUMMY_TASKS } from "../../data/dummy-tasks";
import { TaskFormComponent } from "../task-form/task-form.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    TaskFormComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) selectedUser!: User;

  tasks = DUMMY_TASKS;
  isFormOpen = false;

  get userTasks() {
    return this.tasks.filter(({userId}) => userId === this.selectedUser?.id);
  }

  onComplete(taskId: string) {
    this.tasks = this.tasks.filter(({id}) => id !== taskId);
  }

  opAddTask() {
    this.isFormOpen = true;
  }
}
