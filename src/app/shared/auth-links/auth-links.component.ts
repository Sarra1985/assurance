import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-auth-links',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './auth-links.component.html',
  styleUrl: './auth-links.component.css'
})
export class AuthLinksComponent {

}
