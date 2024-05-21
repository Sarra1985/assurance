import { Component } from '@angular/core';
import { HeadingComponent } from '../../shared/heading/heading.component';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-joint-us',
  standalone: true,
  imports: [
    HeadingComponent,
    ButtonComponent,

  ],
  templateUrl: './joint-us.component.html',
  styleUrl: './joint-us.component.css'
})
export class JointUsComponent {

}
