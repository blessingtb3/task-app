import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../objects/users/dummy-users';

//generating 
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  //selected user from the dummy users to be dynamically displayed and accessed on template
  selectedUser = DUMMY_USERS[randomIndex];

  get imagePath(){
    return '../../assets/users/' + this.selectedUser.avatar;
  }
}
