import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ToastalertComponent } from './component/toastalert/toastalert.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AllCourseComponent } from './all-course/all-course.component';
import { BlogComponent } from './blog/blog.component';
import { PagesComponent } from './pages/pages.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'all-course', component:AllCourseComponent },
  { path: 'pages' , component:PagesComponent },
  { path: 'blog' , component:BlogComponent },
  { path: 'contact' , component:ContactComponent },
  { path: 'test' , component:TestComponent },

];


