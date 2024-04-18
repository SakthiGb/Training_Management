import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsermanagementRoutingModule } from './usermanagement-routing.module'


import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserManagementComponent } from './user-management/user-management.component';


@NgModule({
  declarations: [
    UserManagementComponent,
  ],
  imports: [
    CommonModule,
    UsermanagementRoutingModule,    
    AgGridModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[]
})
export class UsermanagementModule { }
