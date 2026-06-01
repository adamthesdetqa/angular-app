import { Component } from '@angular/core';
import { DUMMY_USERS, UserData } from './user-data';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  userList: UserData[] = DUMMY_USERS;
}
