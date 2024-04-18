import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPlanComponent } from './detail-plan/detail-plan.component';
import { MasterConfigurationComponent } from './master-configuration/master-configuration.component';
import { StreamsComponent } from './streams/streams.component';
import { TechnologyComponent } from './technology/technology.component';
import { AddPhaseComponent } from './training-phase/add-phase/add-phase.component';
import { TrainingPhaseComponent } from './training-phase/training-phase.component';

const routes: Routes = [
  {
    path:'trainingphase',
    component:TrainingPhaseComponent
  },
  {
    path:'trainingphase/:id',
    component:TrainingPhaseComponent
  },
  {
    path:"addPhase",
    component:AddPhaseComponent
  },
  {
    path:'detailPlan',
    component:DetailPlanComponent
  },  {
    path:'detailPlan/:id',
    component:DetailPlanComponent
  },
  {
    path:'stream',
    component:StreamsComponent,

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingConfigurationRoutingModule { }
