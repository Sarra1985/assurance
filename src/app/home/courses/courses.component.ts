import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Course } from '../../models/course.model';
import { CardComponent } from '../../shared/card/card.component';
import { NgFor,NgIf } from '@angular/common';
import { HeadingComponent } from '../../shared/heading/heading.component';
import { SliderComponent } from '../../shared/slider/slider.component';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    HttpClientModule,
    CardComponent,
    NgFor,
    NgIf,
    HeadingComponent,
    SliderComponent,
    ButtonComponent,

  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit{
  
  courses: Course[] = [];
  categories:string[]=[];
  filteredCourses: Course[] = [];

  constructor( private httpClient:HttpClient){}
  ngOnInit(): void {
    this.getAllCourses()

  }

  getAllCourses(){
    this.httpClient.get("assets/data/courses.json").subscribe({
      next:(courses)=>{
        this.courses =courses as Course[];
        this.filteredCourses =courses as Course[];
        this.getCategories()
      },
      error: (errors) => {
        console.log(errors)
      }
    })

  }

    getCategories(){
    this.categories=this.courses.map((course)=>{ return course.category })
    this.categories= [...new Set(this.categories)] //eviter la repetition de la meme categorie
    // console.log(this.categories);
  }

  filterCourses(category:string)
  {
   this.filteredCourses=this.courses.filter((course) => {return course.category == category})
  }

}
