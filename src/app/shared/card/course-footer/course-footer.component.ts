import { Component, Input, OnInit } from '@angular/core';
import { RatingComponent } from '../../rating/rating.component';
import { Course } from '../../../models/course.model';
import { CoursesComponent } from '../../../home/courses/courses.component';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-course-footer',
  standalone: true,
  imports: [
    RatingComponent,
    CoursesComponent,
    NgIf,
    

  ],
  templateUrl: './course-footer.component.html',
  styleUrl: './course-footer.component.css'
})
export class CourseFooterComponent implements OnInit {
@Input('course')
course! :Course;
constructor(){}
ngOnInit(): void {

}

}
