import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ManageroleComponent } from '../managerole.component';

@Component({
  selector: 'app-editcellrenderer',
  templateUrl: './editcellrenderer.component.html',
  styleUrls: ['./editcellrenderer.component.scss']
})
export class EditcellrendererComponent implements ICellRendererAngularComp {



  public params: any;
  constructor(
    private list: ManageroleComponent)
    {
  }
  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.params = params.rowIndex
  }
  // gets called whenever the cell refreshes

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
  onclick() {
    this.list.formname = "Edit Role"
    this.list.edit_role(this.params)
    console.log(this.params)
  }



}
