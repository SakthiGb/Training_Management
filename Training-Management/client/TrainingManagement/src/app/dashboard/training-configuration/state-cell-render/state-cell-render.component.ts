import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-state-cell-render',
  templateUrl: './state-cell-render.component.html',
  styleUrls: ['./state-cell-render.component.scss']
})
export class StateCellRenderComponent implements ICellRendererAngularComp {

  public params: any;
  value: any;
  constructor(private route:Router) { }
  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.params = params;
    this.value=params.value
  }

  // gets called whenever the cell refreshes
  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  onclick() {
    this.route.navigate(["/dashBoard/trainingphase",{id:this.value}])
    console.log(this.params)
  }

}
