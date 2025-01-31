import { Component } from '@angular/core';

@Component({
  selector: 'app-header',//to use in other components or templates
  standalone: true,//marks the component as a standalone component - it doesn't have any dependencies
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
