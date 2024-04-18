import { Component, Input } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { StreamsComponent } from '../streams.component';

@Component({
  selector: 'app-edit-stream',
  template: `<i class="bi bi-pencil-square" (click)="edit()" data-bs-toggle="offcanvas"
  data-bs-target="#offcanvasStreams"></i>`,
  styles:[`i{
    color: rgb(124, 64, 108);
    font-size: larger;}`]
})
export class EditStreamComponent implements ICellRendererAngularComp {

  public params: any;
  value: any;
  formname:any;
  constructor(private comp:StreamsComponent) { }
  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.params = params.rowIndex;
  }

  // gets called whenever the cell refreshes
  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  edit() {
    this.formname="Edit Stream"
    this.comp.editStreams(this.params)
  }
}