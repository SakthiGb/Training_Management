import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Technology } from 'src/app/model/Technology';
import { TrainingPhaseComponent } from '../training-phase.component';

@Component({
  selector: 'app-edit-trainingPhase',
  template: `<i class="bi bi-pencil-square" (click)="edit()"></i>`,
  styles:[`i{
    color: rgb(124, 64, 108);
    font-size: larger;}`]
})
export class EditTrainingPhaseComponent implements ICellRendererAngularComp {

  public params: any;
  value: any;
  formname:any;
  constructor(private comp:TrainingPhaseComponent,
    private rout :Router ) { }
  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.params = params.rowIndex;
  }

  // gets called whenever the cell refreshes
  refresh(params: ICellRendererParams): boolean {
    return false;
  }
  edit() {
 this.comp.formname="EditPhase"
    this.rout.navigate(['/dashBoard/addPhase'])
    this.comp.editTrainingPhase(this.params)
    console.log(this.params)
  }
}