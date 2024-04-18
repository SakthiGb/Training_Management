import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AgGridModule } from 'ag-grid-angular';
import { UsermanagementModule } from './usermanagement/usermanagement.module';
import { RolemanagementModule } from './rolemanagement/rolemanagement.module';
import { InitiatetrainingModule } from './InitateTraining/initiatetraining.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrainingConfigurationModule } from './training-configuration/training-configuration.module';




@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    AgGridModule,
    TrainingConfigurationModule,
    UsermanagementModule,
    RolemanagementModule,
    InitiatetrainingModule,

  ]
})
export class DashboardModule { }
