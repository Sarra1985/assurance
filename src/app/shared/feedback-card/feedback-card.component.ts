import { Component, Input, OnInit } from '@angular/core';
import { Feedbacks } from '../../models/feedback.model';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-feedback-card',
  standalone: true,
  imports: [
    RatingComponent,
    
  ],
  templateUrl: './feedback-card.component.html',
  styleUrl: './feedback-card.component.css'
})
export class FeedbackCardComponent implements OnInit {

  @Input('feedback')
  feedback!: Feedbacks;
  constructor(){}
  ngOnInit(): void {

  }
}
