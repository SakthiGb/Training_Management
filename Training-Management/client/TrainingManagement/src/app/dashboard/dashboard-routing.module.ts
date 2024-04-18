import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitiatetrainingComponent } from './InitateTraining/initiatetraining/initiatetraining.component';
import { ManageroleComponent } from './rolemanagement/managerole/managerole.component';
import { StreamsComponent } from './training-configuration/streams/streams.component';
import { TrainingConfigurationComponent } from './training-configuration/training-configuration/training-configuration.component';
import { UserManagementComponent } from './usermanagement/user-management/user-management.component';

const routes: Routes = [
  {
    path:"",
    component:UserManagementComponent,
    loadChildren:()=>import ('./usermanagement/usermanagement.module').then(m=>m.UsermanagementModule)
  },
  {
    path:"roleManagement",
    component:ManageroleComponent,
    loadChildren:()=>import('./rolemanagement/rolemanagement.module').then(m=>m.RolemanagementModule)
  },
  {
    path:"trainingConfiguration",
    component:TrainingConfigurationComponent,
    loadChildren:()=>import ('./training-configuration/training-configuration.module').then(m=>m.TrainingConfigurationModule)
  },
    {
      path:"initiateTraining",
      component:InitiatetrainingComponent,
      loadChildren:()=>import('./InitateTraining/initiatetraining.module').then(m=>m.InitiatetrainingModule)
    },
  
    
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
