import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { User } from "../../types/user";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User
  @Input({required: true}) isSelected!: boolean;
  @Output() select = new EventEmitter<string>();

  onSelectedUser() {
    this.select.emit(this.user.id)
  }

  get imageAlt() {
    return "Avatar of " + this.userName;
  }

  get userAvatar() {
    return this.user.avatar
  }

  get userName() {
    return this.user.name
  }
}
