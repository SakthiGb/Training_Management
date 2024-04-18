import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolemanagementRoutingModule } from './rolemanagement-routing.module';
import { ManageroleComponent } from './managerole/managerole.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { PermissionComponent } from './permission/permission.component';
import { AddCellrendererComponent } from './permission/add-cellrenderer/add-cellrenderer.component';
import { DeleteCellrendererComponent } from './permission/delete-cellrenderer/delete-cellrenderer.component';
import { EditCellrendererComponent } from './permission/edit-cellrenderer/edit-cellrenderer.component';
import { ReadCellrendererComponent } from './permission/read-cellrenderer/read-cellrenderer.component';
import { CheckBoxComponent } from './managerole/check-box/check-box.component';



@NgModule({
  declarations: [
    ManageroleComponent,
    PermissionComponent,
    AddCellrendererComponent,
    DeleteCellrendererComponent,
    EditCellrendererComponent,
    ReadCellrendererComponent,
    CheckBoxComponent
  ],
  imports: [
    CommonModule,
    RolemanagementRoutingModule,
    AgGridModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    ManageroleComponent
  ]
})
export class RolemanagementModule { }
