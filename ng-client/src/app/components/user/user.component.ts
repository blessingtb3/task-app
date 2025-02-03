import { Component,  computed,  signal} from '@angular/core';

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
  //option 1: selectedUser = DUMMY_USERS[randomIndex];

  //option 2: using signals to manage the state of the component
  //signal - object that stores a value, angular manages subscriptions to the signal to get notified about value changes
  //signals - containers that contain values that notify angular when the value changes
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  //computing the image path of the selected user everytime the selected user changes
  imagePath = computed(() => '../../assets/users/' + this.selectedUser().avatar);




  //OPTION 1: managing state of the user component by changing the selected user every time the button is clicked
  onSelecUser(){
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

        //option 1 this.selectedUser = DUMMY_USERS[randomIndex];
        //option 2: using signals to manage the state of the component
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
    
    
  }//extra info: angular uses a framework called zone.js to detect changes in the state of the component and update the view accordingly
}



/*note: signals will so far only be used in this part of the project, but they can be used in other parts of the project to manage the state of the application
for now we will be using the standard angular way of managing state in the rest of the project
and will be returning to signals in the future to manage the state of the application*/