import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageroleComponent } from './managerole/managerole.component';
import { PermissionComponent } from './permission/permission.component';

const routes: Routes = [

  // {
  //   path:"roleManagement",
  //   component:ManageroleComponent
  // },
  {
    path:"permission",
    component:PermissionComponent
    },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolemanagementRoutingModule { }
