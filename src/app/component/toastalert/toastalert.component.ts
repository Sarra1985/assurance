import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toastalert',
  standalone: true,
  imports: [],
  templateUrl: './toastalert.component.html',
  styleUrl: './toastalert.component.css'
})

export class ToastalertComponent {
  constructor(private toastr:ToastrService){
  }

  showsuccess(){
    this.toastr.success("Saved successfully.","Success");
  }

  showerror(){
    this.toastr.error("Saved error.","Failed");
  }
  showwarning(){
    this.toastr.warning("Not matched.","Warning");
  }

  showinfo(){
    this.toastr.info("just information.","Info");
  }

}
