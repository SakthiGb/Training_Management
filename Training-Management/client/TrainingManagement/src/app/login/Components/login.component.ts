import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  name: any;
  submitted = false;
  username: any;
  password: any;
  show = false;

  constructor(private fb: FormBuilder,
    private rout: Router,
    private service: ServicesService
    ) { }
  //Add user form actions
  ngOnInit() {
    this.password = 'password';
    localStorage.clear()
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    //True if all the fields are filled
    if (this.submitted) {
      console.log(this.registerForm.value);
      this.service.authenticate(this.registerForm.value).subscribe((res: any) => {
        localStorage.setItem("token", res.token)
        this.service.getByEmail(localStorage.getItem("email"))
        this.rout.navigateByUrl('/dashBoard');
        
      },
        (error) => {
          console.log(error.error);
          this.showErrorAlert()
          this.registerForm.reset();
          this.rout.navigateByUrl('/');
        })
    }

  }
  showErrorAlert() {
    Swal.fire('Error!', 'Username or Password Incorrect!', 'error')
  }

  forgotPassword() {
    this.rout.navigateByUrl('/forgotpassword')
  }

  registerForm = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    Validators.maxLength(100),
    Validators.minLength(15)]),
    password: new FormControl("", [Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}'),
    Validators.maxLength(20),
    Validators.minLength(6)]),
  }
  )
  get form() {
    return this.registerForm.controls
  }

  Click() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
}





