import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors, ValidatorFn, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-passwordconfirmation',
  templateUrl: './passwordconfirmation.component.html',
  styleUrls: ['./passwordconfirmation.component.scss']
})
export class PasswordconfirmationComponent implements OnInit {

  submitted: any;
  email: any;
  constructor(private rout: Router,
    private service: ServicesService) { }
  get f() { return this.ConfirmForm.controls; }
  ngOnInit(): void {
  }
  onSubmit() {
    this.showSuccessAlert
    console.log({
      "email": this.email,
      "password": this.ConfirmForm.value.password
    });

    this.service.resetPassword({
      "email": this.email,
      "password": this.ConfirmForm.value.password
    }).subscribe((res) => {
      // alert("Password has been changed, click Ok to navigate login page")

      this.rout.navigateByUrl('/');
    }, (error) => {
      // alert(error.error);
      this.showErrorAlert();
      this.ConfirmForm.reset();
    })
  }
  showErrorAlert() {

    Swal.fire('Yikes!', 'Something went wrong!', 'error')

  }

  showSuccessAlert() {

    Swal.fire('Done!', 'Password Changed Successfully!', 'success')

  }
  route() {
    this.rout.navigateByUrl('/')
  }
  static MatchValidator(source: string, target: string): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

      const sourceCtrl = control.get(source);

      const targetCtrl = control.get(target);

      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value

        ? { mismatch: true }

        : null;

    };

  }

  ConfirmForm = new FormGroup({

    password: new FormControl("", [Validators.required, Validators.maxLength(20),
    Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}'),
    Validators.minLength(6)]),
    confirmPassword: new FormControl("", [Validators.required,
    Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}'),
    Validators.maxLength(20),
    Validators.minLength(6)]),
  },
    [PasswordconfirmationComponent.MatchValidator('password', 'confirmPassword')])

  get password() {
    return this.ConfirmForm.get('password');
  }
  get confirmPassword() {
    return this.ConfirmForm.get('password');
  }
  get passwordMatchError() {

    return (

      this.ConfirmForm.getError('mismatch') &&

      this.ConfirmForm.get('confirmPassword')?.touched

    );
  }
  confirm = false
  decision() {
    if (this.confirm == true) {
      this.confirm = false;
    } else this.confirm = true
  }
  passwd = 'password';
  show = false;
  Click() {
    if (this.passwd === 'password') {
      this.passwd = 'text';
      this.show = true;
    } else {
      this.passwd = 'password';
      this.show = false;
    }
  }
}