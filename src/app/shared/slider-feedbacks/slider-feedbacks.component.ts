import { AfterViewInit, Component, ElementRef, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild,EventEmitter, ContentChild, TemplateRef } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Feedbacks } from '../../models/feedback.model';
import { FeedbackCardComponent } from '../feedback-card/feedback-card.component';


@Component({
  selector: 'app-slider-feedbacks',
  standalone: true,
  imports: [
   FeedbackCardComponent,
    NgFor,
    NgIf,
  ],
  templateUrl: './slider-feedbacks.component.html',
  styleUrl: './slider-feedbacks.component.css'
})

export class SliderFeedbacksComponent implements OnInit , AfterViewInit{

  @Input('itemsFeedbacks')
  itemsFeedbacks: Feedbacks[]=[];
  dots:number[]=[];
  activeSlideID=1;


 @ViewChild('sliderContainer')
 sliderContainer! :ElementRef;

  sliderContainerWidth = 0;
  slideWidth= 0;
  elementsToShow =1;
  sliderWidth=0;
  sliderMarginLeft=0;

  @HostListener('window:resize',['$event'])
  onScreenResize()
  {
     this.SetUpSlider()
  }

  constructor(){}

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.SetUpSlider();
  }

  SetUpSlider()
  {


    if(window.innerWidth<900)
    {
      this.elementsToShow=1;
      // this.dots=Array(this.itemsFeedbacks.length)
    }
    else {
    this.elementsToShow=2;
    // this.dots=Array(this.itemsFeedbacks.length-1)
  }

  if(this.itemsFeedbacks.length< this.elementsToShow)
    {
       this.elementsToShow=this.itemsFeedbacks.length;
    }
   this.dots=Array(this.itemsFeedbacks.length - this.elementsToShow+1)
   let container = this.sliderContainer.nativeElement as HTMLElement;
   this.sliderContainerWidth= container.clientWidth;
   this.slideWidth = this.sliderContainerWidth/this.elementsToShow;
   this.sliderWidth= this.slideWidth * this.itemsFeedbacks.length;
  }


  prev()
  {
    console.log(this.sliderMarginLeft)
    if(this.sliderMarginLeft >= 0)
      {
       return
      }
      this.activeSlideID--;
    this.sliderMarginLeft=this.sliderMarginLeft + this.slideWidth;
  }
  next()
  {

    const notShowingElementsCount = this.itemsFeedbacks.length-this.elementsToShow;
    const possibleMargin = -(notShowingElementsCount * this.slideWidth);
    if(this.sliderMarginLeft <= possibleMargin)
      {
        return
      }
      this.activeSlideID++;
this.sliderMarginLeft=this.sliderMarginLeft-this.slideWidth;

  }

  move(slideID:number)
  {
console.log("SlideID   :  "+slideID)
console.log("activeSlideID  :  "+ this.activeSlideID)
let difference=slideID-this.activeSlideID;
if(difference>0)
  {
  for(let index=0 ; index < difference;index++)
    {
      this.next()
    }
  }
  else if(difference<0)
    {
      for(let index=0 ; index < Math.abs(difference);index++)
        {
          this.prev()
        }
    }

  }
}
