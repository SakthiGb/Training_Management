import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingConfigurationRoutingModule } from './training-configuration-routing.module';
import { TrainingConfigurationComponent } from './training-configuration/training-configuration.component';
import { TechnologyComponent } from './technology/technology.component';
import { MasterConfigurationComponent } from './master-configuration/master-configuration.component';
import { AddMasterTrainingComponent } from './add-master-training/add-master-training.component';
import { AgGridModule } from 'ag-grid-angular';
import { StateCellRenderComponent } from './state-cell-render/state-cell-render.component';

import { EditTechnologyComponent } from './edit-cell-renderers/edit-technology/edit-technology.component';
import { EditMasterTrainingComponent } from './edit-cell-renderers/edit-master-training/edit-master-training.component';
import { EditMasterModalComponent } from './edit-cell-renderers/edit-master-modal/edit-master-modal.component';
import { AddPhaseComponent } from './training-phase/add-phase/add-phase.component';
import { TrainingPhaseComponent } from './training-phase/training-phase.component';
import { DetailPlanComponent } from './detail-plan/detail-plan.component';
import { StreamsComponent } from './streams/streams.component';
import { TrainingComponent } from "./training/training.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TrainingConfigurationComponent,
    TechnologyComponent,
    MasterConfigurationComponent,
    AddMasterTrainingComponent,
    StateCellRenderComponent,
    EditTechnologyComponent,
    EditMasterTrainingComponent,
    EditMasterModalComponent,
    TrainingPhaseComponent,
    AddPhaseComponent,
    DetailPlanComponent,
    StreamsComponent,
    TrainingComponent
  ],
  imports: [
    CommonModule,
    TrainingConfigurationRoutingModule,
    AgGridModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TrainingConfigurationModule { }
