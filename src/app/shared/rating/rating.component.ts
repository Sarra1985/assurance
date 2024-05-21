import { Component, Input, OnInit } from '@angular/core';
import { TestComponent } from '../../test/test.component';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    TestComponent,
  ],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent implements OnInit {

  @Input('value')
  value=0;

  totalStarts = 5;

  constructor(){}
ngOnInit(): void {

}

}
