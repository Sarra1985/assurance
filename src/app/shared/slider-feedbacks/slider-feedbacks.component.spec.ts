import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderFeedbacksComponent } from './slider-feedbacks.component';

describe('SliderFeedbacksComponent', () => {
  let component: SliderFeedbacksComponent;
  let fixture: ComponentFixture<SliderFeedbacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderFeedbacksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderFeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
