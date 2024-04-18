import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { AddMasterTrainingComponent } from '../../add-master-training/add-master-training.component';

@Component({
  selector: 'app-edit-master-modal',
  templateUrl: './edit-master-modal.component.html',
  styleUrls: ['./edit-master-modal.component.scss']
})
export class EditMasterModalComponent implements ICellRendererAngularComp {

  public params: any;
  value: any;
  constructor(private comp: AddMasterTrainingComponent) { }
  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.params = params.rowIndex;
  }

  // gets called whenever the cell refreshes
  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  editTechnology() {
    this.comp.editMasterModal(this.params)
  }
}