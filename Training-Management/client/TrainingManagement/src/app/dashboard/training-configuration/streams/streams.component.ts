import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Streams } from 'src/app/model/Streams';
import { Services } from 'src/app/shared/services';
import Swal from 'sweetalert2';
import { StatusCellRenderComponent } from '../status-cell-render/status-cell-render.component';
import { DeleteStreamComponent } from './cellrenderer/deleteStream';
import { EditStreamComponent } from './cellrenderer/editStream';
import { StatusStreamsComponent } from './cellrenderer/statusStreams';


@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.scss']
})
export class StreamsComponent implements OnChanges {

  gridApiActive: any;
  Data: any = [];
  rowData: any = [];
  user: boolean = false;
  rolelist: boolean = true;
  formname: any;
  total_records:Number
  searchtext: any;
  constructor(
    private fb: FormBuilder,
    private ser: Services,
    private rout: Router) { }

  ngOnInit(): void {
    this.getStream()
  }

  ngOnChanges(chages:SimpleChanges){
    this.total_records=this.rowData.length
  }


  columnDefs = [
    { headerName: "Stream", field: "name", filter: "agTextColumnFilter", width: 190 },
    {
      headerName: "Updated On", field: "createdOn", width: 190, cellRenderer: (params: any) => {
        let newDate = new Date(params.value)
        return newDate.toDateString()
      }
    },
    { headerName: "Updated by", field: "updatedBy", width: 190 },
    { headerName: "Status", field: 'active', width: 140, cellRenderer: StatusStreamsComponent },
    { headerName: "Edit", width: 140, cellRenderer: EditStreamComponent },
    { headerName: "Delete", width: 140, cellRenderer: DeleteStreamComponent }
  ];



  addStreams = this.fb.group({
    id: [""],
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    active: [""],
  });

  get register() {
    return this.addStreams.controls;
  }
  addStream() {
    this.formname = "Add Stream"
  }

  editStreams(i: any) {
    this.formname = "Edit Stream"
    this.addStreams.setValue({
      id: this.rowData[i].id,
      name: this.rowData[i].name,
      description: this.rowData[i].description,
      active: this.rowData[i].active,
    })
  }

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
  raiserequest() { }


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
          this.showSuccessAlert()
          this.saveStream(this.addStreams.value)          
          this.addStreams.reset()
          let d = document.getElementById("offcanvasStreams")
          d?.classList.remove("show")
        } else if (result.isDismissed) { }
      })
  }
  saveStream(datas: any) {
    let data = this.mapToModel(this.addStreams.value);
    console.log(JSON.stringify(data))
    this.ser.saveStreams(data).subscribe((res) => { this.rowData = res; })
    // this.getStream()
  }
  mapToModel(data: any) {
    let streams = new Streams();
    streams.id=data.id;
    streams.name = data.name;
    streams.description = data.description;
    streams.active = data.active;
    return streams;
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

          this.addStreams.reset()
          let d = document.getElementById("offcanvasStreams")
          d?.classList.remove("show")
          
        } else if (result.isDismissed) { }
      })
  }
  empty() {
    this.searchtext = null;
    this.gridApiActive.setQuickFilter(this.searchtext)
  }
  onFilterTextBoxChanged() {
    this.gridApiActive.setQuickFilter(this.searchtext)
  }
  showDoneAlert() {

    Swal.fire('Done!', 'Cancelled Successfully!', 'success')
  
  }
  showSuccessAlert() {

    Swal.fire('Done!', 'Saved Successfully!', 'success')

  }



  getStream() {
    this.ser.getStreams().subscribe((res: any) => {
      this.rowData = res
      this.total_records=this.rowData.length
      this.ser.setter(this.rowData)
    })
  }
}
