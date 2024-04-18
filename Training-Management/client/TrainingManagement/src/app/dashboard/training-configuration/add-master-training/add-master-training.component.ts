import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeleteCellRendererComponent } from '../delete-cell-renderer/delete-cell-renderer.component';
import { EditMasterModalComponent } from '../edit-cell-renderers/edit-master-modal/edit-master-modal.component';
import { TrainconfigService } from '../share/trainconfig.service';

@Component({
  selector: 'app-add-master-training',
  templateUrl: './add-master-training.component.html',
  styleUrls: ['./add-master-training.component.scss']
})
export class AddMasterTrainingComponent implements OnInit {

  gridApiActive: any;
  Data: any = []
  rowData: any
  parentProperty = ''
  Training = ["Basic Training", "Medium Training", "Advance Training"]
  Technology = ["1", "2", "3", "4", "5","6"]
  Level = ["L1", "L2", "L3", "L4", "L5", "L6"]
  masterMsg: any = []

  constructor(private fb: FormBuilder, private rout: Router, private share: TrainconfigService) { }

  ngOnInit(): void {
    this.rowData = [
      {
        training: 'Basic Training',
        technology: '4',
        duration: '3 weeks',
        level: 'L1',
        updatedon: '12-5-22',
        updatedby: "Kalaiarasu"
      },
      {
        training: 'Medium Training',
        technology: '2',
        duration: '2 weeks',
        level: 'L3',
        updatedon: '02-8-22',
        updatedby: "Leo"
      },
      {
        training: 'Advance Training',
        technology: '6',
        duration: '4 weeks',
        level: 'L5',
        updatedon: '26-3-22',
        updatedby: "Keerthana"
      }
    ];

    this.masterMsg = this.share.setMaster();
    this.addMasterTraining.setValue({
      mastertrainingname: this.masterMsg[0],
      duration: this.masterMsg[1],
      description: null
    })
  }

  editMasterModal(alpha: any) {
    this.addTraining.setValue({
      training: this.rowData[alpha].training,
      technology: this.rowData[alpha].technology,
      level: this.rowData[alpha].level,
      description: null
    })
  }

  addMasterTraining = this.fb.group({
    mastertrainingname: ['', [Validators.required]],
    duration: ['', [Validators.required]],
    description: [''],
  });

  addTraining = this.fb.group({
    training: ['', [Validators.required]],
    technology: ['', [Validators.required]],
    level: ['', [Validators.required]],
    description: [''],
  })

  get register() {
    return this.addMasterTraining.controls;
  }
  get regist() {
    return this.addTraining.controls;
  }

  columnDefs = [
    { headerName: "Training", field: "training", filter: "agTextColumnFilter", width: 150 },
    { headerName: "Technology", field: "technology", filter: "agTextColumnFilter", width: 140 },
    { headerName: "Duration", field: "duration", width: 150 },
    { headerName: "Level", field: "level", width: 150 },
    { headerName: "Updated On", field: "updatedon", width: 150 },
    { headerName: "Updated by", field: "updatedby", width: 150 },
    { headerName: "Edit", width: 140, cellRenderer: EditMasterModalComponent },
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
  a: any = 10;

  onSubmit() {
    this.masterMsg.splice(0, this.masterMsg.length)
  }

  cancel() {

    this.share.getMsg('mastertraining');
    this.masterMsg.splice(0, this.masterMsg.length)
    this.rout.navigateByUrl("/trainingConfigurationComponent");
  }

  modelSave() {
    this.addTraining.reset();
  }

  modelCancel() {
    this.addTraining.reset();
  }

}
