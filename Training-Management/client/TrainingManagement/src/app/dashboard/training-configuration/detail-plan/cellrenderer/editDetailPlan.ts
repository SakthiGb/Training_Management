import { Component, Input } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { DetailPlanComponent } from '../detail-plan.component';

@Component({
    selector: 'app-edit-detail-plan',
    template: `<i class="bi bi-pencil-square" (click)="edit()"></i>`,
    styles: [`i{
    color: rgb(124, 64, 108);
    font-size: larger;}`]
})
export class EditDetailPlanComponent implements ICellRendererAngularComp {

    public params: any;
    value: any;
    formname: any;
    constructor(
        private comp: DetailPlanComponent
    ) { }
    // gets called once before the renderer is used
    agInit(params: ICellRendererParams): void {
        this.params = params.rowIndex;
    }

    // gets called whenever the cell refreshes
    refresh(params: ICellRendererParams): boolean {
        return false;
    }

  edit() {     
  this.comp.editDetailPlan(this.params)
  }
}