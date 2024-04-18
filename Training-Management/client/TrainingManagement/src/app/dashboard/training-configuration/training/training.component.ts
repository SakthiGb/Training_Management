import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { StateCellRenderComponent } from '../state-cell-render/state-cell-render.component';

import { Services } from 'src/app/shared/services';
import { Training } from 'src/app/model/Training';
import { Streams } from 'src/app/model/Streams';
import { StreamType } from 'src/app/model/StreamType';
import { EditTrainingComponent } from './cellrender/editTraining';
import { DeleteTrainingComponent } from './cellrender/deleteTraining';
import { StatusTrainingComponent } from './cellrender/statusTraining';
import { Observable, interval, Subscription } from 'rxjs';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  gridApiActive: any;
  streamsData: any = [];
  streamTypeData: any = [];
  rowData: any
  searchtext: any;
  formname: any;
  user: boolean = false;
  rolelist: boolean = true;
  websiteList: any = ['10', '20', '30']
  canva: boolean
  @Input()
  Training: Training
  update: Subscription;

  constructor(private fb: FormBuilder, 
    private rout: Router,
    private ser: Services) {
  }

  ngOnInit(): void {
    this.getTraining()
    this.getStream()
    this.getStreamType()
  }

  columnDefs = [
    { headerName: "Name", field: "name", filter: "agTextColumnFilter", width: 120 },
    { headerName: "Stream", field: "streams.name", width: 110 },
    { headerName: "Type", field: "streamType.name", width: 100 },
    { headerName: "Duration", field: "duration", width: 110 },
    {
      headerName: "Updated On", field: "updatedOn", width: 130, cellRenderer: (params: any) => {
        let newDate = new Date(params.value)
        return newDate.toDateString()
      }
    },
    { headerName: "Updated By", field: "updatedBy", width: 130 },
    { headerName: "Active", field: "id", width: 110, cellRenderer: StateCellRenderComponent },
    { headerName: "Status", field: "active", width: 80, cellRenderer: StatusTrainingComponent },
    { headerName: "Edit", width: 80, cellRenderer: EditTrainingComponent },
    { headerName: "Delete", width: 90, cellRenderer: DeleteTrainingComponent }
  ];

  addTraining = this.fb.group({
    id: [null],
    name: [''],
    streams: [''],
    streamType: [''],
    description: [''],
    duration: [''],
    active: ['']
  });

  get register() {
    return this.addTraining.controls;
  }

  getStream() {
    this.ser.getStreams().subscribe((res: any) => {
      this.streamsData = res
      this.ser.setter(this.streamsData)
    })
  }
  getStreamType() {
    this.ser.getStreamType().subscribe((res: any) =>
      this.streamTypeData = res)
  }
  onGridReady1(params: any) {
    this.gridApiActive = params.api
  }
  empty() {
    this.searchtext = null;
    this.gridApiActive.setQuickFilter(this.searchtext)
  }
  onFilterTextBoxChanged() {
    this.gridApiActive.setQuickFilter(this.searchtext)
  }


  changeWebsite(e: any) {
    if (e.target.value == e.target.value) {
      this.a = e.target.value
    }
    else (
      this.a = 5
    );
  }
  a: any = 10;

  addTraninig() {
    this.formname = "Add Training"
    this.canva = true
  }

  editTraining(i: any) {
    this.formname = "Edit training"
    this.addTraining.setValue({
      id: this.rowData[i].id,
      name: this.rowData[i].name,
      streams: this.rowData[i].streams.id,
      streamType: this.rowData[i].streamType.id,
      duration: this.rowData[i].duration,
      description: this.rowData[i].description,
      active: this.rowData[i].active
    })
  }

  getTraining() {
    this.ser.getTraining().subscribe((res: any) => {
      this.rowData = res
    })
  }
  Save() {
    Swal.fire({
      title: 'Please Confirm',
      text: 'Are you sure you want to save this operation?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: "Cancel"
    })
      .then((result) => {
        if (result.isConfirmed) {
          if (this.user == true) {
            this.rolelist = true
            this.user = false
          }
          this.saveTraining(this.addTraining.value)
          this.showSuccessAlert()
          this.addTraining.reset()
          let d = document.getElementById("offcanvasTraining")
          d?.classList.remove("show")
        } else if (result.isDismissed) { }
      })
  }

  saveTraining(data: any) {
    let datas = this.mapToModel(this.addTraining.value);
    console.log(JSON.stringify(datas))
    this.ser.saveTraining(datas).subscribe((res) => { this.rowData = res; })
  }

  mapToModel(data: any) {
    let traininig = new Training();
    traininig.id=data.id? Number(data.id):null;
    traininig.active = data.active;
    traininig.description = data.description;
    traininig.duration = data.duration;
    traininig.name = data.name;
    traininig.status = data.isActive;
    let streams = new Streams();
    streams.id = Number(data.streams)
    traininig.streams = streams;
    let streamType = new StreamType;
    streamType.id = Number(data.streamType)
    traininig.streamType = streamType;
    return traininig;
  }

  Cancel() {
    Swal.fire({
      title: 'Please Confirm',
      text: 'Are you sure you want to cancel this operation?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: "Cancel"
    })
      .then((result) => {
        if (result.isConfirmed) {

          if (this.user == true) {
            this.rolelist = true
            this.user = false

          }
          this.showDoneAlert()
          this.addTraining.reset()
          let d = document.getElementById("offcanvasTraining")
          d?.classList.remove("show")
        } else if (result.isDismissed) { }
      })

  }



  showDoneAlert() {

    Swal.fire('Done!', 'Cancelled Successfully!', 'success')
    let d = document.getElementById("offcanvasTraining")
    d?.classList.remove("show")

  }
  showSuccessAlert() {
    Swal.fire('Done!', 'Saved Successfully!', 'success')
  }
}
