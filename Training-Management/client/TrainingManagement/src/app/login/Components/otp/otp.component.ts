import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  submitted: any;
  email: any;
  password: any;

  constructor(private rout: Router,
    private fb: FormBuilder,
    private service: ServicesService,
  ) { }

  get form() { return this.otpForm.controls; }
  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.otpForm.invalid) {
      return;
    }
    //True if all the fields are filled
    if (this.submitted) {
      console.log({
        "email": this.email,
        "otp": Number(this.otpForm.value.otp)
      });

      this.service.confirmOtp({
        "email": this.email,
        "otp": Number(this.otpForm.value.otp)
      }).subscribe((res) => {
        this.otpForm.reset();
        this.rout.navigateByUrl("/confirmation")
      },
        (error) => {
          this.showErrorAlert()
          this.otpForm.reset()
        })
    }

  }
  showErrorAlert() {
    Swal.fire('Error!', 'Enter Valid OTP!', 'error')
  }
  otpForm = new FormGroup({
    otp: new FormControl(null, [Validators.required, Validators.pattern("[0-9 ]{6}"),
    Validators.maxLength(6),

    ])
  });

}