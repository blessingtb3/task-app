import { Component, computed, EventEmitter, Input, input, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})



export class UserComponent {


  //adding a decorator to the class that tells Angular that this class is a component and adds metadata to it
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Output() select = new EventEmitter();

  //get image path for user avatar
  get imagePath() {
    return '../../assets/users/' + this.avatar;
  }

  
  onSelecUser(){
    this.select.emit();
  }

}

