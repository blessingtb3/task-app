import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})



export class UserComponent {


  //adding a decorator to the class that tells Angular that this class is a component and adds metadata to it
  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath(){
    return '../../assets/users/' + this.avatar;
  }

  onSelecUser(){}

}

