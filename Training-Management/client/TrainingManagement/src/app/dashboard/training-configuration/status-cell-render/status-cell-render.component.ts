import { Component, OnInit } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-status-cell-render',
  templateUrl: './status-cell-render.component.html',
  styleUrls: ['./status-cell-render.component.scss']
})
export class StatusCellRenderComponent implements ICellRendererAngularComp {

  public params: any;
  value: any;
  constructor() { }
  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.params = params;
    this.value = params.value;

  }

  // gets called whenever the cell refreshes
  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  onclick() {
    console.log(this.params)
  }

}
