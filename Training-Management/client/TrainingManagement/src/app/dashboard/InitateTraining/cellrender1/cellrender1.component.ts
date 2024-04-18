import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-cellrender1',
  templateUrl: './cellrender1.component.html',
  styleUrls: ['./cellrender1.component.scss']
})
export class Cellrender1Component implements ICellRendererAngularComp{
  
  public params: any;
  value: any;
  constructor() { }
    // gets called once before the renderer is used

    agInit(params: ICellRendererParams): void {

      this.params = params.rowIndex;
  
    }

    // gets called whenever the cell refreshes

  refresh(params: ICellRendererParams):boolean {

    return false;

  }
  onclick(){
    console.log(this.params)
      }
      
  ngOnInit(): void {
  }

}
