import { Component, Input } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { TrainingComponent } from '../training.component';
@Component({
  selector: 'app-edit-training',
  template: `<i class="bi bi-pencil-square" (click)="edit()" data-bs-toggle="offcanvas"
  data-bs-target="#offcanvasTraining"></i>`,
  styles:[`i{
    color: rgb(124, 64, 108);
    font-size: larger;}`]
})
export class EditTrainingComponent implements ICellRendererAngularComp {

  public params: any;
  value: any;
  formname:any;
  constructor(private comp:TrainingComponent ) { }
  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.params = params.rowIndex;
  }

  // gets called whenever the cell refreshes
  refresh(params: ICellRendererParams): boolean {
    return false;
  }
  edit() {
    this.comp.editTraining(this.params)
    console.log(this.params)
  }
}