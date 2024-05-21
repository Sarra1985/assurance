import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { CoursesComponent } from '../../../home/courses/courses.component';
import { Course } from '../../../models/course.model';
import { BlogComponent } from '../../../blog/blog.component';
import { Blog } from  "../../../models/blog.model";
@Component({
  selector: 'app-blog-footer',
  standalone: true,
  imports: [
    ButtonComponent,
    CoursesComponent,
    BlogComponent,


  ],
  templateUrl: './blog-footer.component.html',
  styleUrl: './blog-footer.component.css'
})
export class BlogFooterComponent implements OnInit{
@Input('blog')
blog!:Blog;
constructor(){}

ngOnInit(): void {
    
}

}
