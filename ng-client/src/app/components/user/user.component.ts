import { Component, computed, Input, input} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})



export class UserComponent {


  //adding a decorator to the class that tells Angular that this class is a component and adds metadata to it
  //@Input({required: true}) avatar!: string;
  //@Input({required: true}) name!: string;
  avatar = input.required<string>();
  name = input.required<string>();


  //imagePath signal - trackable data containers, more effecient 
  imagePath = computed(() => {
    return '../../assets/users/' + this.avatar();
  });
  

  
  onSelecUser(){}

}

