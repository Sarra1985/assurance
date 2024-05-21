import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { VideoPopupComponent } from '../../shared/video-popup/video-popup.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    ButtonComponent,
    VideoPopupComponent,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit{
  canShowVideo=false;
  constructor(){
  }
  ngOnInit(): void {
  }

}
