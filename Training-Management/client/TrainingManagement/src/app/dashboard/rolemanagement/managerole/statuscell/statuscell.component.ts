import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-statuscell',
  templateUrl: './statuscell.component.html',
  styleUrls: ['./statuscell.component.scss']
})
export class StatuscellComponent implements ICellRendererAngularComp {

  public params: any;

  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  // gets called whenever the cell refreshes
  refresh(params: ICellRendererParams):boolean {
    return false;
  }
  
}

