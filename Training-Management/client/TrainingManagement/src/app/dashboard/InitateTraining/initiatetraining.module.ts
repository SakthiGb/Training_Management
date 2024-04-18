import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGridModule } from 'ag-grid-angular';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InitiatetrainingComponent } from './initiatetraining/initiatetraining.component';
import { TrainingInitiationComponent } from './training-initiation/training-initiation.component';
import { CellrenderComponent } from './cellrender/cellrender.component';
import { Cellrender1Component } from './cellrender1/cellrender1.component';
import { InitiatetrainingRoutingModule } from './initiatetraining-routing.module';



@NgModule({
  declarations: [
    InitiatetrainingComponent,
    TrainingInitiationComponent,
    CellrenderComponent,
    Cellrender1Component
  ],
  imports: [
    CommonModule,
    AgGridModule,
    InitiatetrainingRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports:[
    InitiatetrainingComponent,
    TrainingInitiationComponent
  ]
})
export class InitiatetrainingModule { }
