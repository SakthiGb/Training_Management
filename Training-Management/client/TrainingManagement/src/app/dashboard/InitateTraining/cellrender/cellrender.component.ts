import { OnInit } from '@angular/core';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

import { Router } from '@angular/router';
// import { AddRewardComponent } from '../add-reward/add-reward.component';
// import { RewardhistoryService } from 'src/app/reward-catalouge/service/rewardhistory.service';
import { InitiatetrainingComponent } from '../initiatetraining/initiatetraining.component';

@Component({
  selector: 'app-cellrender',
  templateUrl: './cellrender.component.html',
  styleUrls: ['./cellrender.component.scss']
})
export class CellrenderComponent implements ICellRendererAngularComp{
  name:any;
  public params: any;
  value: any;
  
  constructor(private route:Router,
  
    ){}


 
  agInit(params: ICellRendererParams): void {
    this.params = params;
    //  this.add.formname = "Update Reward"
  }

  // gets called whenever the cell refreshes
  refresh(params: ICellRendererParams):boolean {
    return false;
  }

  trainingInitiation(){
    // this.add.formname="Training Initiation"
    // this.add.trainingInitiations()
    // console.log(this.params.value)
    this.route.navigateByUrl("/dashBoard/trainingInitiation");
    // this.rewardHistory.emit(this.rewardhistory);
    // this.form.rewardhistory = true
  }
}

