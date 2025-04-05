import { Component, Input } from '@angular/core';
import { User } from "../../types/user";
import { TaskComponent } from "../task/task.component";
import { DUMMY_TASKS } from "../../data/dummy-tasks";
import { TaskFormComponent } from "../task-form/task-form.component";
import { SubmitData } from "../../types/submit-data";
import { TasksService } from "./tasks.service";

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
  isFormOpen = false;

  constructor(private tasksService: TasksService) {
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.selectedUser.id);
  }

  onAddTask() {
    this.isFormOpen = true;
  }

  onCloseForm () {
    this.isFormOpen = false;
  }
}
