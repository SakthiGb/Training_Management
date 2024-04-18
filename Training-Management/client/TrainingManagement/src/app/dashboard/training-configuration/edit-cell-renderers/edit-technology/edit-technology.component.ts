import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { TechnologyComponent } from '../../technology/technology.component';

@Component({
  selector: 'app-edit-technology',
  templateUrl: './edit-technology.component.html',
  styleUrls: ['./edit-technology.component.scss']
})
export class EditTechnologyComponent implements ICellRendererAngularComp {

  public params: any;
  value: any;
  constructor(private comp:TechnologyComponent) { }
  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.params = params.rowIndex;
  }

  // gets called whenever the cell refreshes
  refresh(params: ICellRendererParams): boolean {
    return false;
  }


  editTechnology() {
    this.comp.editTechnology(this.params)
  }
}