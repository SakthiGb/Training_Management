import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import Swal from 'sweetalert2';
import { DashboardComponent } from '../../dashboard/dashboard.component';

import { StatusUserComponent } from './cellrenderer/statusUser';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  formname: any;
  form: boolean = false;

  value = ' ';
  user: boolean = false;
  userData: any
  headingName: any;
  confSwitch: boolean = true;
  Data: any
  gridApiActive: any
  searchtext: any;
  userlist: boolean = true;
  role: boolean = false
  loading: any;
  activate: boolean = true;


  members: string[] = [
    "Sesha",
    "Saran",
    "Tamil",
  ]

  constructor(private rout: Router,
    private service:ServicesService,
    private dash: DashboardComponent,
    ) {
      this.dash.name = { "names": "" }
    }
  
  addUserForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.maxLength(50)]),
    description: new FormControl("", [Validators.required, Validators.maxLength(250)]),
    active: new FormControl("true", [Validators.required]),

  })

  get register() {
    return this.addUserForm.controls;
  }

  ngOnInit(): void {
    this.dash.UserManagement();
this.getAllUser();


  }

  getAllUser(){
    this.service.getAllUser().subscribe((res)=>{
      this.userData=res
    },
    (error)=>{
      console.log(JSON.stringify(error.error));
      
    })
  }
  


  onGridReady1(params: any) {
    this.gridApiActive = params.api
  }

  userDatas = [
    { headerName: "User Name", field: "username", filter: "agTextColumnFilter", width: 200 },
    { headerName: "NSID", field: "nsid", width: 180 },
    { headerName: "Email", field: "email", width: 200 },
    { headerName: "Department", field: "department.name", width: 150 },
    { headerName: "Designation", field: "designation.name", width: 130 },
    { headerName: "Status", width: 140, field: "active", cellRenderer:StatusUserComponent},
   
 

  ]

  onFilterTextBoxChanged() {
    this.gridApiActive.setQuickFilter(this.searchtext)
  }

  // add_role() {
  //   this.formname = "Add Role"
  //   this.user = true
  // }
  add_User() {
    this.formname = "Add User"
    if (this.userlist == true) {
      this.userlist = false
      this.user = true
    }
  }
  editUser(data:any){

  }
  empty() {
    this.searchtext = null;
    this.gridApiActive.setQuickFilter(this.searchtext)
  

  }

  
  onSubmit() {
    // this.user(this.addUserForm.value)
  }
  showDoneAlert() {

    Swal.fire('Done!', 'Cancelled Successfully!', 'success')

  }


  Save() {
    //  this.saveStream(this.addUserForm.value)
    console.log(this.addUserForm.value)
    this.addUserForm.reset()
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
          this.showDoneAlert()
          this.addUserForm.reset()
          let d = document.getElementById("offcanvasRight")
          d?.classList.remove("show")
        } else if (result.isDismissed) { }
      })
  }

  edit_role(i: any) {
    this.userlist = false
    this.form = true
    console.log(i);

    this.addUserForm.setValue({
      name: this.userData[i].name,
      description: null,
      active: null
    })
  }
  close_form() {
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
            this.userlist = true
            this.user = false
          }
          this.showDoneAlert()
          this.addUserForm.reset()
          let d = document.getElementById("offcanvasRight")
          d?.classList.remove("show")
        } else if (result.isDismissed) { }
      })
    // if (this.user == true) {
    //   this.rolelist = true
    //   this.user = false
    // }    
  }
  ActiveAlert() {
    Swal.fire('Done!', 'Status Active!', 'success')
  }
  NotActiveAlert() {
    Swal.fire('Done!', 'Status Not active!', 'success')
  }
 
  showSuccessAlert() {

    Swal.fire('Done!', 'Saved Successfully!', 'success')

  }


  websiteList: any = ['10', '20', '30']
  changeWebsite(e: any) {
    if (e.target.value == e.target.value) {
      this.a = e.target.value
    }
    else (
      this.a = 10
    );
  }
  a: any = 10;
}


