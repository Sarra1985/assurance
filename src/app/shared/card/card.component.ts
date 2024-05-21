import { Component, OnInit, Input } from '@angular/core';
import { CourseFooterComponent } from './course-footer/course-footer.component';
import { BlogFooterComponent } from './blog-footer/blog-footer.component';
import { NgFor, NgIf } from '@angular/common';
import { CoursesComponent } from '../../home/courses/courses.component';
import { Course } from '../../models/course.model';
import { Blog } from '../../models/blog.model';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CourseFooterComponent,
    BlogFooterComponent,
    NgIf,NgFor,
    CoursesComponent
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  @Input('input')
  input! :Course | Blog;

  @Input('type')
  type='C';
  constructor(){}
  ngOnInit(): void {


  }
  castToCourse(input:Course | Blog )
  {
  return input as Course;
  }
  castToBlog(input:Course | Blog )
  {
  return input as Blog;
  }

}
