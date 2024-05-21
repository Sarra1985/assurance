import { Component, ContentChild, ElementRef, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HeadingComponent } from '../../shared/heading/heading.component';
import { NgFor, NgIf } from '@angular/common';
import { Clients } from '../../models/clients.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [
    HeadingComponent,
    NgIf,
    NgFor,

  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements OnInit{

  clients:  Clients[]=[];
  constructor(private httpClient:HttpClient){

  }
  ngOnInit(): void {
  this.getAllClients();
  }

  getAllClients(){
    this.httpClient.get("assets/data/clients.json").subscribe({
      next:(clients)=>{
        this.clients =clients as Clients[];

      },
      error: (errors) => {
        console.log(errors)
      }
    })
  }



  activeSlideID = 1;

  @ContentChild('template')
  template: TemplateRef<any> | undefined;


  @ViewChild('sliderContainer')
  sliderContainer! :ElementRef;


   sliderContainerWidth = 0;
   slideWidth= 0;
   elementsToShow =1;
   sliderWidth=0;
   sliderMarginLeft=0;
   isSlidesOver = false;
   autoPlayB=true;

   @HostListener('window:resize',['$event'])
   onScreenResize(){
   this.SetUpSlider()
  }


   ngAfterViewInit(): void {
     this.SetUpSlider();
   }

   SetUpSlider()
   {
    if (window.innerWidth < 500)
      this.elementsToShow = 1;
    else if (window.innerWidth < 900)
      this.elementsToShow = 2;
    else if (window.innerWidth < 1300)
      this.elementsToShow = 3;
    else
      this.elementsToShow = 4;

    if (this.clients.length < this.elementsToShow) {
      this.elementsToShow = this.clients.length;
    }



    let container = this.sliderContainer.nativeElement as HTMLElement;

    this.sliderContainerWidth= container.clientWidth;
    this.slideWidth = this.sliderContainerWidth/this.elementsToShow;
    this.sliderWidth= this.slideWidth * this.clients.length;


       if(this.autoPlayB) this.autoPlay()
   }


   autoPlay()
   {
 setTimeout(() => {
   if(this.isSlidesOver == true)
     {
       this.sliderMarginLeft=this.slideWidth;
     }
   this.next()
   this.autoPlay()
 }, 4000);
   }


   next() {
    const notShowingElementsCount = this.clients.length - this.elementsToShow;
    const possibleMargin = -(notShowingElementsCount * this.slideWidth);
    if (this.sliderMarginLeft <= possibleMargin) {
      this.isSlidesOver = true;
      return
    }
    this.isSlidesOver = false;
    this.activeSlideID++;
    this.sliderMarginLeft = this.sliderMarginLeft - this.slideWidth;
  }
}
