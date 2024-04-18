import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { AddMasterTrainingComponent } from '../../add-master-training/add-master-training.component';
import { TrainconfigService } from '../../share/trainconfig.service';

@Component({
  selector: 'app-edit-master-training',
  templateUrl: './edit-master-training.component.html',
  styleUrls: ['./edit-master-training.component.scss']
})
export class EditMasterTrainingComponent implements ICellRendererAngularComp {

  public params: any;
  value: any;
  constructor(private rout: Router,private share:TrainconfigService) { }
  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  // gets called whenever the cell refreshes
  refresh(params: ICellRendererParams): boolean {
    return false;
  }


  editMaster(){
    this.share.getMaster(this.params.data.training,this.params.data.trainingCount);
    this.rout.navigateByUrl("/addMasterTraining");
  }
}