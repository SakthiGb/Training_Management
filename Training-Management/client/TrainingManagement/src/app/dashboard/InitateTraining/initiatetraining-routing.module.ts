import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingInitiationComponent } from './training-initiation/training-initiation.component';

const routes: Routes = [

  { 
    path:"trainingInitiation",
    component:TrainingInitiationComponent
   }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class InitiatetrainingRoutingModule{}