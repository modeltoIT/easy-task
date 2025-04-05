import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from "../../data/dummy-tasks";
import { SubmitData } from "../../types/submit-data";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks = DUMMY_TASKS;

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return  this.tasks.filter(({userId: id}) => id === userId);
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter(({id}) => id !== taskId);

    this.saveTasks();
  }

  addTask(taskData: SubmitData, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    })

    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

}
