import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Components/login.component';
import { PasswordconfirmationComponent } from './Components/passwordconfirmation/passwordconfirmation.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { OtpComponent } from './Components/otp/otp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  LoginComponent,
  PasswordconfirmationComponent,
  ForgotpasswordComponent,
  OtpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[ ]
})
export class LoginModule { }
