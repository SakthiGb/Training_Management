import { Component, OnInit } from '@angular/core';
import { DeleteCellRendererComponent } from '../delete-cell-renderer/delete-cell-renderer.component';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StateCellRenderComponent } from '../state-cell-render/state-cell-render.component';
import { EditMasterTrainingComponent } from '../edit-cell-renderers/edit-master-training/edit-master-training.component';

@Component({
  selector: 'app-master-configuration',
  templateUrl: './master-configuration.component.html',
  styleUrls: ['./master-configuration.component.scss']
})
export class MasterConfigurationComponent implements OnInit {

  gridApiActive: any;
  Data: any = []
  rowData:any
  a: any = 10;
  
  constructor(
    private fb: FormBuilder, private rout: Router
    ) { }

  ngOnInit(): void {
    this.rowData = [
      {
        trainingCode: '#0001',
        training: 'SQL Training',
        trainingCount: '4',
        updatedon: '12-5-22',
        updatedby: "Kalaiarasu"
      },
      {
        trainingCode: '#0002',
        training: '.Net Training',
        trainingCount: '2',
        updatedon: '02-8-22',
        updatedby: "Kalaiarasu"
      },
      {
        trainingCode: '#0003',
        training: 'Java Training',
        trainingCount: '6',
        updatedon: '12-2-22',
        updatedby: "Kalaiarasu"
      },
      {
        trainingCode: '#0004',
        training: 'Angular Training',
        trainingCount: '9',
        updatedon: '22-08-22',
        updatedby: "Kalaiarasu"
      }
    ];
  }
 columnDefs = [
    { headerName: "Training Code", field: "trainingCode", filter: "agTextColumnFilter", width: 120 },
    { headerName: "Master Training", field: "training", filter: "agTextColumnFilter", width: 145 },
    { headerName: "Training Count", field: "trainingCount", width: 150 },
    { headerName: "Updated On", field: "updatedon", width: 130 },
    { headerName: "Updated by", field: "updatedby", width: 135 },
    { headerName: "Status", width: 120, cellRenderer: StateCellRenderComponent },
    { headerName: "Edit", width: 140, cellRenderer: EditMasterTrainingComponent },
    { headerName: "Delete", width: 140, cellRenderer: DeleteCellRendererComponent }
  ];

  onGridReady1(params: any) {
    this.gridApiActive = params.api
  }

  websiteList: any = ['10', '20', '30']

  changeWebsite(e: any) {

    if (e.target.value == e.target.value) {
      this.a = e.target.value
    }
    else (
      this.a = 5
    );

  }
  addTraining(){
    this.rout.navigateByUrl("dashBoard/addMasterTraining")
  }
  // onclick(){
  //   this.rout.navigateByUrl("/addMasterTraining")
  // }
  
}
