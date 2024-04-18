import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CheckBoxComponent } from './check-box/check-box.component';
import Swal from 'sweetalert2';
import { DeletecellComponent } from './deletecell/deletecell.component';
import { EditcellrendererComponent } from './editcellrenderer/editcellrenderer.component';
import { StatuscellComponent } from './statuscell/statuscell.component';
import { ServicesService } from 'src/app/services/services.service';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-managerole',
  templateUrl: './managerole.component.html',
  styleUrls: ['./managerole.component.scss']
})
export class ManageroleComponent implements OnInit {
  formname: string;
  value = ' ';
  userData: any
  headingName: any;
  confSwitch: boolean = true;
  Data: any
  gridApiActive: any
  searchtext: any;
  role: boolean = false;
  user: boolean = false;
  rolelist: boolean = true;

  loading: any;
  activate: boolean = true;
  rowData: any;
  streamsData: any = [];
  Roles = ["L1", "L2", "L5", "L4", "L5", "L6"];



  constructor(private service: ServicesService, private dash: DashboardComponent,
  ) {
    this.dash.name = { "names": "" }
  }
  addRoleForm = new FormGroup({
    rolename: new FormControl("", [Validators.required, Validators.maxLength(50)]),
    description: new FormControl("", [Validators.required, Validators.maxLength(250)]),
    active: new FormControl("true", [Validators.required]),

  })
  get register() {
    return this.addRoleForm.controls;
  }

  ngOnInit(): void {
    this.dash.roleManagement();
    this.getAllRole();
   
  }

  getAllRole() {
    this.service.getRole().subscribe((res) => {
      this.userData = res
      localStorage.setItem("role", JSON.stringify(res))
    },
      (error) => {
        console.log(JSON.stringify(error.error));

      })
  }
  setPermission(event) {
    console.log(event.currentTarget.value);

    this.permission_rowData = this.userData.find((obj) => {
      return obj.id == event.currentTarget.value;
    })

    console.log(this.permission_rowData);

  }



  edit_role(i: any) {
    this.rolelist = false
    this.user = true

    console.log(i);

    this.addRoleForm.setValue({
      rolename: this.userData[i].rolename,
      description: null,
      active: null
    })
  }

  onGridReady1(params: any) {
    this.gridApiActive = params.api
  }

  userDatas = [
    {
      headerName: "Role Name", field: "name", filter: "agTextColumnFilter", width: 210, cellRenderer: (params) => {
        return `<span>${params.value}-${params.node.data.userdataList.length
          }</span>`
      }
    },
    {
      headerName: "Updated On", field: "updated_on", width: 210, cellRenderer: (params: any) => {
        return params.value[2] + "-" + params.value[1] + "-" + params.value[0];
      }
    },
    { headerName: "Updated by", field: "updated_by", width: 210 },
    { headerName: "Status", field: "status", cellRenderer: StatuscellComponent, width: 130 },
    { headerName: "Edit", field: "edit", cellRenderer: EditcellrendererComponent, width: 130 },
    { headerName: "Delete", field: "delete", cellRenderer: DeletecellComponent, width: 110 }

  ]

  permission_colDef = [
    {
      headerName: "Permit", field: "name", width: 210, cellRenderer: (params: any) => {
        if (params.value == "Configuration") {
          return `<p style="font-weight:600;text-align:left;width:180px">${params.value}</p>`
        } else {
          return `<p style="text-align:left;width:180px">${params.value}</p>`
        }
      }
    },
    { headerName: "Read", field: "read", width: 170, cellRenderer: CheckBoxComponent },
    { headerName: "Add", field: "add", width: 165, cellRenderer: CheckBoxComponent },
    { headerName: "Edit", field: "edit", width: 160, cellRenderer: CheckBoxComponent },
    { headerName: "Delete", field: "delete", width: 160, cellRenderer: CheckBoxComponent }
  ]

  permission_rowData: any[] = [
    {
      name: "Configuration",
      read: false,
      add: false,
      edit: false,
      delete: false
    },
    {
      name: "user Management",
      read: false,
      add: false,
      edit: false,
      delete: false
    },
    {
      name: "Role Management",
      read: false,
      add: false,
      edit: false,
      delete: false
    },
    {
      name: "Permission",
      read: false,
      add: false,
      edit: false,
      delete: false
    }
  ]


  
  add_role() {
    this.formname = "Add Role"
    if (this.rolelist == true) {
      this.rolelist = false
      this.user = true
    }
  }
  Save() {
    //  this.saveStream(this.addRoleForm.value)
    // console.log(this.addRoleForm.value)
    // this.addRoleForm.reset()

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
          this.addRoleForm.reset()
          let d = document.getElementById("offcanvasRight")
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
          this.addRoleForm.reset()
          let d = document.getElementById("offcanvasRight")
          d?.classList.remove("show")
        } else if (result.isDismissed) { }
      })
    // if (this.user == true) {
    //   this.rolelist = true
    //   this.user = false
    // }    
  }

  /////////////////////////////-----------------sweet alert-----------------------------////////////////////////////////
  ActiveAlert() {
    Swal.fire('Done!', 'Status Active!', 'success')
  }
  NotActiveAlert() {
    Swal.fire('Done!', 'Status Not active!', 'success')
  }
  showDoneAlert() {

    Swal.fire('Done!', 'Cancelled Successfully!', 'success')

  }
  showSuccessAlert() {

    Swal.fire('Done!', 'Saved Successfully!', 'success')

  }


  active(event) {
    // console.log(event.currentTarget.checked);


    if (event.currentTarget.checked == true) {
      this.ActiveAlert()
    }
    else
      this.NotActiveAlert()
  }
  cancel() {

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
          this.addRoleForm.reset()
          let d = document.getElementById("offcanvasRight")
          d?.classList.remove("show")
        } else if (result.isDismissed) { }
      })
  }


  saveRole(data: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do You Really Want To Save?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Save it!',
      cancelButtonText: "Don't,save",
    })


      .then((result) => {

        if (result.isConfirmed) {

          this.service.saveRole({
            rolename: this.addRoleForm.value.rolename,
            description: this.addRoleForm.value.description,
            active: this.addRoleForm.value.active,
          })
          // .subscribe((res)=>{ })

          this.showSuccessAlert()

          let d = document.getElementById("offcanvasRight");

          d.classList.remove("show");

          this.addRoleForm.reset()

        } else if (result.isDismissed) {

          this.cancel()
        }
      })

  }

  onSubmit() {
    this.saveRole(this.addRoleForm.value)
  }

  /////////////////////////////-------------------selected row count---------------------------------/////////////////////

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


