import { Component, OnInit } from '@angular/core';
import { RatingComponent } from '../shared/rating/rating.component';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    RatingComponent,
    CardComponent,
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent  implements OnInit{

  ratingValue =2;

  constructor(){}
ngOnInit(): void {

}

}
