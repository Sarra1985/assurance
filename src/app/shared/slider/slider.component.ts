import { AfterViewInit, Component, ElementRef, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild,EventEmitter, ContentChild, TemplateRef } from '@angular/core';
import { CoursesComponent } from '../../home/courses/courses.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    CoursesComponent,
    NgFor,

  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit , AfterViewInit{

  @Input('items')
  items: string[] =[];

  @Output('select')
  onSelect: EventEmitter<string> = new EventEmitter<string>();

 @ViewChild('sliderContainer')
 sliderContainer! :ElementRef;

  sliderContainerWidth = 0 ;
  slideWidth= 0;
  elementsToShow =1;
  sliderWidth=0;
  sliderMarginLeft=0;

  @HostListener('window:resize',['$event'])
  onScreenResize()
  {
    // this.getCategories();
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
    if(window.innerWidth<700)
      {
        this.elementsToShow=1;
      }
      else {
    if (window.innerWidth<900)
    {
      this.elementsToShow=2;
    }
    else
    {
    if(window.innerWidth<1300)
    {
      this.elementsToShow=3;
    }
    else {
    this.elementsToShow=5;
  }}}

   let container = this.sliderContainer.nativeElement as HTMLElement;
   this.sliderContainerWidth= container.clientWidth;
   this.slideWidth = this.sliderContainerWidth/this.elementsToShow;
  //  this.sliderWidth= this.slideWidth*this.categories.length;
   this.sliderWidth= this.slideWidth * this.items.length;

  }

  // getCategories(){
  //   this.categories=this.courses.map((course)=>{ return course.category })
  //   this.categories= [...new Set(this.categories)] //eviter la repetition de la meme categorie
  //   console.log(this.categories);
  // }

  prev()
  {
    console.log("sliderMarginLeft : " +this.sliderMarginLeft)
    if(this.sliderMarginLeft >= 0 )
      {
       return
      }
    this.sliderMarginLeft=this.sliderMarginLeft + this.slideWidth;
  }
  next()
  {
    // const notShowingElementsCount = this.categories.length-this.elementsToShow;
    const notShowingElementsCount = this.items.length-this.elementsToShow;
    const possibleMargin = -(notShowingElementsCount * this.slideWidth);
    if(this.sliderMarginLeft <= possibleMargin)
      {
        return
      }
     this.sliderMarginLeft=this.sliderMarginLeft-this.slideWidth;

  }
}
