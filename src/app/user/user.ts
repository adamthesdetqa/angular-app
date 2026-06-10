import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS, UserData } from './user-data';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  userList: UserData[] = DUMMY_USERS;
  selectedUser = signal<UserData | null>(null);
  imagePath = computed(() => `assests/users/${this.selectedUser()?.avatar}`);

  onUserClick(user: UserData) {
    this.selectedUser.set(user);
    console.log(this.imagePath());
    console.log(`${this.selectedUser()?.name} clicked!`);
  }
}
