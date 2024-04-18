import { Component, OnInit } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-status-user',
  template: `<div class="form-check form-switch" formControlName="checkbox">
  <input class="form-check-input" type="checkbox" id="active" [checked]="value">
</div>`,
 styles:[`.form-check-input:checked {
    font-size: larger;
    background-color: #741e5b;
    border: #741e5b;
    box-shadow: none;
  }
  
  .form-switch .form-check-input:focus {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='white'/%3e%3c/svg%3e");
  }

  .form-check-input{
    font-size: larger;
    background-color: #b9b9b9;
    border: #b9b9b9;
    box-shadow: none;
  }`]
})
export class StatusUserComponent implements ICellRendererAngularComp {

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
