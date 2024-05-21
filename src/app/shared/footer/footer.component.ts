import { Component } from '@angular/core';
import { EmailComponent } from '../email/email.component';
import { PhoneComponent } from '../phone/phone.component';
import { SocialLinksComponent } from '../social-links/social-links.component';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { SubscribeFormComponent } from '../subscribe-form/subscribe-form.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    EmailComponent,
    PhoneComponent,
    SocialLinksComponent,
    RouterLink,
    ButtonComponent,
    SubscribeFormComponent,


  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
