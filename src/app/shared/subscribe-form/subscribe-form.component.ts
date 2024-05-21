import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NgIf } from '@angular/common';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-subscribe-form',
  standalone: true,
  imports: [
    ButtonComponent,
   NgIf,
   FormsModule,
  ReactiveFormsModule,


  ],
  templateUrl: './subscribe-form.component.html',
  styleUrl: './subscribe-form.component.css'
})
export class SubscribeFormComponent implements OnInit {
  // email:string | undefined = undefined;
  message:string='';
  errorMessage:string='';
  subscribeForm = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    // phone:new FormControl(),
    // name:new FormControl(),
  })

    constructor(private httpClient: HttpClient){ }

  ngOnInit(): void {

  }
  // submit(form:NgForm)
  submit()
  {
  //  console.log(form.value)
  //  console.log(form.valid)
  //  this.httpClient.post('/api/subscriptionForm.php',form.value).subscribe(
   this.httpClient.post('../../../../api/subscriptionForm.php',this.subscribeForm.value).subscribe(
    (data:any)=>{
      if(data.message=='SUCCESS'){
        this.message = "Thank You. "
      }
      console.log(data)
    },
    (error)=>{
      this.errorMessage = error.error;
      console.log(error)
    }
   )
  }

}
