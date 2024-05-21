import { Component, Input, OnInit } from '@angular/core';
import { HeadingComponent } from '../../shared/heading/heading.component';
import { HttpClient } from '@angular/common/http';
import { Feedbacks } from '../../models/feedback.model';
import { NgIf } from '@angular/common';
import { SliderFeedbacksComponent } from '../../shared/slider-feedbacks/slider-feedbacks.component';
import { FeedbackCardComponent } from '../../shared/feedback-card/feedback-card.component';
@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [
    HeadingComponent,
    SliderFeedbacksComponent,
    FeedbackCardComponent, 
    NgIf,

  ],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.css'
})
export class FeedbacksComponent implements OnInit{

  feedbacks: Feedbacks[] = []
  constructor(private httpClient:HttpClient){

  }
  ngOnInit(): void {
  this.getAllFeedbacks();
  }

  getAllFeedbacks(){
    this.httpClient.get("assets/data/feedbacks.json").subscribe({
      next:(feedbacks)=>{
        this.feedbacks =feedbacks as Feedbacks[];

      },
      error: (errors) => {
        console.log(errors)
      }
    })
  }

}
