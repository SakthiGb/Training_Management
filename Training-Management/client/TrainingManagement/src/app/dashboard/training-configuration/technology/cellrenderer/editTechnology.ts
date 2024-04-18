import { Component, Input } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Technology } from 'src/app/model/Technology';

@Component({
  selector: 'app-edit-training',
  template: `<i class="bi bi-pencil-square" (click)="edit()" data-bs-toggle="offcanvas"
  data-bs-target="#offcanvasTraining"></i>`,
  styles:[`i{
    color: rgb(124, 64, 108);
    font-size: larger;}`]
})
export class EditTechnology implements ICellRendererAngularComp {

  public params: any;
  value: any;
  formname:any;
  constructor(private comp:Technology ) { }
  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.params = params.rowIndex;
  }

  // gets called whenever the cell refreshes
  refresh(params: ICellRendererParams): boolean {
    return false;
  }
  edit() {
    alert("kdsn")
    this.comp.editTechnology(this.params)
    console.log(this.params)
  }
}