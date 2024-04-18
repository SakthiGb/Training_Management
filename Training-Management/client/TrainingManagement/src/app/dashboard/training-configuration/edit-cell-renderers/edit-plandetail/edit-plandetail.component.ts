import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { DetailPlanComponent } from '../../detail-plan/detail-plan.component';

@Component({
  selector: 'app-edit-plandetail',
  templateUrl: './edit-plandetail.component.html',
  styleUrls: ['./edit-plandetail.component.scss']
})
export class EditPlandetailComponent implements ICellRendererAngularComp {

  public params: any;
  value: any;
  formname: string;
  constructor(private comp: DetailPlanComponent
    ) { }
  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.params = params.rowIndex;
  }

  // gets called whenever the cell refreshes
  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  editplan() {
 
    this.comp.editDetailPlan(this.params)
  }
}