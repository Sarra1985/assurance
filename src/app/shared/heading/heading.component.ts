import { NgIf } from '@angular/common';
import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [
    NgIf,

  ],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent implements OnInit{
@Input('subHeading')
subHeading='';

@Input('headingText1')
headingText1='';

@Input('headingText2')
headingText2='';

@Input('headingText3')
headingText3='';

@Input('specialHeadingID')
specialHeadingID:number|string=2;

@Input('align')
align='L';//C,L

constructor(){}
  ngOnInit():void {}
}
