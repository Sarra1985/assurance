import { Component, OnInit,Input } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit {
  @Input('disabled')
  disabled = false;

  @Input('size') //S,M,L
  size="S";
  @Input('shade') //D,L,W,NA
  shade="D";
  @Input('animation') // C,F,NA
  animation="C";
  @Input('name')
  name='';
  animationClass='';
  constructor()  {}
  ngOnInit(): void {
    this.setUpAnimationClasses();

  }

  setUpAnimationClasses()
  {
    if (!this.disabled && this.animation =='F' && this.shade == 'D' )
    {
         this.animationClass= 'hover:bg-zinc-50';
    }
    else if (!this.disabled && this.animation=='F' && this.shade == 'L')
    {
       this.animationClass= 'hover: bg-rose-900';
    }
    else if (!this.disabled && this.animation == 'F' && this.shade == 'W')
      {
       this.animationClass='hover:bg-red-900'
      }
  }
}
