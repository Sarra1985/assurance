import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog.model';
import { CardComponent } from '../../shared/card/card.component';
import { NgFor } from '@angular/common';
import { HeadingComponent } from '../../shared/heading/heading.component';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [

    HttpClientModule,
    CardComponent,
    NgFor,
    HeadingComponent,
    
  ],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent implements OnInit{
  blogs: Blog[] = [];

  constructor( private httpClient:HttpClient){}
  ngOnInit(): void {
    this.getAllBlogs()
  }

  getAllBlogs(){
    this.httpClient.get("assets/data/blogs.json").subscribe({
      next:(blogs)=>{
        this.blogs = blogs as Blog[];
      },
      error: (errors) => {
        console.log(errors)
      }
    })

  }
}
