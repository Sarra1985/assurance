import { Component } from '@angular/core';
import { HeadingComponent } from '../../shared/heading/heading.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [
    HeadingComponent,
    
  ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {

}
