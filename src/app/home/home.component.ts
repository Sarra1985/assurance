import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component'
import { HeroComponent } from './hero/hero.component';
import { CoursesComponent } from './courses/courses.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogsComponent } from './blogs/blogs.component';
import { HeadingComponent } from '../shared/heading/heading.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { JointUsComponent } from './joint-us/joint-us.component';
import { StoreComponent } from './store/store.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { ClientsComponent } from './clients/clients.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonComponent,
    HeroComponent,
    CoursesComponent,
    HttpClientModule,
    BlogsComponent,
    HeadingComponent,
    HowItWorkComponent,
    JointUsComponent,
    StoreComponent,
    FeedbacksComponent,
    ClientsComponent,






  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(){}
  currentSize='S';
  ngOnInit(): void {

  }

  test(){
    console.log('Test')
  }

}
