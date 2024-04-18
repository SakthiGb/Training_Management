import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Technology } from 'src/app/model/Technology';
import { Services } from 'src/app/shared/services';
import Swal from 'sweetalert2';
import { EditTechnologyComponent } from '../edit-cell-renderers/edit-technology/edit-technology.component';
import { DeleteTechnologyComponent } from './cellrenderer/deleteTechnology';
import { StatusTechnologyComponent } from './cellrenderer/statusTechnology';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  gridApiActive: any;
  Data: any = []
  rowData: any = []
  technology: any = []
  formname: any;
  user: boolean = false;
  rolelist: boolean = true;
  websiteList: any = ['10', '20', '30']
  a: any = 10;
  searchtext: any;

  constructor(
    private fb: FormBuilder,
    private ser: Services,
    private rout: Router) { }

  ngOnInit(): void {
    this.getTechnologies()
  }


  columnDefs = [
    { headerName: "Technology", field: "name", filter: "agTextColumnFilter", width: 190 },
    {
      headerName: "Updated On", field: "updatedOn", width: 190, cellRenderer: (params: any) => {
        let newDate = new Date(params.value)
        return newDate.toDateString()
      }
    },
    { headerName: "Updated By", field: "updatedBy", width: 190 },
    { headerName: "Status", width: 140, field: "active", cellRenderer: StatusTechnologyComponent },
    { headerName: "Edit", width: 140, cellRenderer: EditTechnologyComponent },
    { headerName: "Delete", width: 140, cellRenderer: DeleteTechnologyComponent }
  ];



  addTechnology = this.fb.group({
    id: [null],
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    active: ['']
  });
  addTech() {
    this.formname = "Add Technology"
  }
  editTechnology(i: any) {
    this.formname = "Edit Technology"
    this.addTechnology.setValue({
      id: this.rowData[i].id,
      name: this.rowData[i].name,
      description: this.rowData[i].description,
      active: this.rowData[i].active,
    })
  }
  get register() {
    return this.addTechnology.controls;
  }

  onGridReady1(params: any) {
    this.gridApiActive = params.api
  }


  changeWebsite(e: any) {
    if (e.target.value == e.target.value) {
      this.a = e.target.value
    }
    else (
      this.a = 5
    );
  }


  getTechnologies() {
    this.ser.getTechnology().subscribe((res: any) => {
      this.rowData = res
      this.ser.setter(this.rowData)
    })
    console.log(this.rowData)
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
          this.showSuccessAlert()
          this.saveTechnology(this.addTechnology.value)
          this.addTechnology.reset()
          let d = document.getElementById("offcanvasTechnology")
          d?.classList.remove("show")
        } else if (result.isDismissed) { }
      })
  }
  saveTechnology(data: any) {
    let datas = this.mapToModel(this.addTechnology.value);
    console.log(JSON.stringify(datas))
    this.ser.saveTechnology(datas).subscribe((res) => { this.rowData = res; })
  }
  mapToModel(data: any) {
    let technology = new Technology
    technology.id=data.id?Number(data.id):null;
    technology.name = data.name;
    technology.description = data.description;
    technology.active = data.active;
    return technology;
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
          this.addTechnology.reset()
          let d = document.getElementById("offcanvasTechnology")
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
}
