import { Component, computed, EventEmitter, Input, input, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})



export class UserComponent {


  // Adding a decorator to the class that tells Angular that this class is a component and adds metadata to it
  @Input({required: true}) id!: string; // Input property to receive the user ID from a parent component
  @Input({required: true}) avatar!: string; // Input property to receive the user avatar from a parent component
  @Input({required: true}) name!: string; // Input property to receive the user name from a parent component
  @Output() select = new EventEmitter(); // Using the event emitter to emit custom values through the select property to any parent component that is interested

  // Get image path for user avatar
  get imagePath() {
    return '../../assets/users/' + this.avatar; // Constructing the path to the user's avatar image
  }

  // Method to handle user selection
  onSelecUser() {
    this.select.emit(this.id); // Emitting this ID on the selected user
  }

}

