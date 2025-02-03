import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from './objects/users/dummy-users';


//decorator that tells Angular that this class is a component and adds metadata to it
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  users = DUMMY_USERS;
}
