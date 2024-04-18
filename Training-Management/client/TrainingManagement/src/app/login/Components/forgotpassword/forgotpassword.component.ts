import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  submitted:any;
  email:any;
  password: any;
  constructor( private rout:Router,private fb:FormBuilder,
    private service:ServicesService) { }
  get f() { return this.resetForm.controls; }
  ngOnInit(): void {
  
  }
  onSubmit(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.resetForm.invalid) {
        return ;    }
    //True if all the fields are filled
    if(this.submitted)
    {
      // this.rout.navigateByUrl('/otp')
      this.service.requestOtp(this.resetForm.value).subscribe((res:any)=>{
        this.resetForm.reset();
        // alert("OTP sent successfylly");
        this.showSuccessAlert()
        this.rout.navigateByUrl('/otp')
      },(error)=>{
        // alert(error.error)
        this.showErrorAlert()
        this.resetForm.reset();
      })
    }
  }
  showSuccessAlert() {
    Swal.fire('Done!', 'OTP Sent Successfully!', 'success')
  }
  showErrorAlert() {
    Swal.fire('Error!', 'Enter Valid Mail Id!', 'error')
  }
  resetForm= new FormGroup ({
   
    email:new FormControl("",[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        Validators.maxLength(100),
     Validators.minLength(15)]),})

  
  
    get form(){
     return this.resetForm.controls
    }
  
}



