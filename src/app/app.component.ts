import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastalertComponent } from './component/toastalert/toastalert.component';
import { HomeComponent } from './home/home.component';
import { AllCourseComponent } from './all-course/all-course.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { PagesComponent } from './pages/pages.component';
import { MenuSharedComponent } from './shared/menu/menu.component';
import { AuthLinksComponent } from './shared/auth-links/auth-links.component';
import { SocialLinksComponent } from './shared/social-links/social-links.component';
import { EmailComponent } from './shared/email/email.component';
import { PhoneComponent } from './shared/phone/phone.component';
import { NgIf } from '@angular/common';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet,
             ToastalertComponent,
             HomeComponent,
             AllCourseComponent,
             BlogComponent,
             ContactComponent,
             MenuComponent,
             PagesComponent,
             MenuSharedComponent,
             AuthLinksComponent,
             SocialLinksComponent,
             EmailComponent,
             PhoneComponent,
             NgIf,
             FooterComponent,
             

   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  })

export class AppComponent {

  isMenuScrolled = false;
  isSidebarShowing =false;
  @HostListener('window:scroll',['$event'])
  scrollCheck(){
    console.log(window.pageYOffset)
    if(window.pageYOffset>100)
      this.isMenuScrolled = true;
    else
      this.isMenuScrolled = false;

      console.log(this.isMenuScrolled)
  }
  openSideBar(){

    this.isSidebarShowing = true;
  }

  closeSideBar(){

    this.isSidebarShowing = false;
  }
  scrollToTop()
  {
    document.body.scrollIntoView(
      {
        behavior:'smooth'
      }
    )
  }


}
