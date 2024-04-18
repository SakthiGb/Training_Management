import { Component, Input } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { DetailPlanComponent } from '../detail-plan.component';


@Component({
  selector: 'app-edit-stream',
  template: `<i class="bi bi-pencil-square" (click)="decision()" ></i>`,
  styles:[`i{
    color: rgb(124, 64, 108);
    font-size: larger;}`]
})
export class EditPlanComponent implements ICellRendererAngularComp {

  public params: any;
  confirm: boolean = false;
  value: any;
  formname:any;
  constructor(private comp:DetailPlanComponent) { }
  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.params = params.rowIndex;
  }

  // gets called whenever the cell refreshes
  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  decision() {
    if (this.confirm == true) {
        this.confirm = false;
      } else this.confirm = true;
      console.log(this.confirm)
       this.comp.editDetailPlan(this.params)
  }
}