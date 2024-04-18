import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { InitiatetrainingComponent } from './dashboard/InitateTraining/initiatetraining/initiatetraining.component';
import { ManageroleComponent } from './dashboard/rolemanagement/managerole/managerole.component';
import { StreamsComponent } from './dashboard/training-configuration/streams/streams.component';
import { TrainingConfigurationComponent } from './dashboard/training-configuration/training-configuration/training-configuration.component';
import { UserManagementComponent } from './dashboard/usermanagement/user-management/user-management.component';
import { ForgotpasswordComponent } from './login/Components/forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/Components/login.component';
import { OtpComponent } from './login/Components/otp/otp.component';
import { PasswordconfirmationComponent } from './login/Components/passwordconfirmation/passwordconfirmation.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: "forgotpassword",
    component: ForgotpasswordComponent
  },
  { 
    path: "otp", 
    component: OtpComponent 
  },
  { 
    path: "confirmation", 
    component: PasswordconfirmationComponent
  },

  {
    path: 'dashBoard',
    component: DashboardComponent,
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
