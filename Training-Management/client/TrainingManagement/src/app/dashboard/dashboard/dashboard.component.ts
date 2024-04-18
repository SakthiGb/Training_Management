import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {



  
public name: any = ""
loading: any
userArray: any=[]
pendingapproval = false
profile: boolean = false
confirm: boolean = false
training = false
config = false
indexes: string = "DashBoard";
// dashboardName: string = "/ DashBoard";
profileName: string = "/ DashBoard/Profile";
UsermanagementName: string = " DashBoard < UserManagement";
roleManagementName: string = " DashBoard < RoleManagement";
permissionName: string = " DashBoard < Permission";
trainingConfigurationName: string ="DashBoard < Training Configuration";
trainingInitiatorName: string="DashBoard < Training Initiator";
users=['Super Admin','Generic User','Trainer'];
access:any="Super Admin"
  constructor(private rout: Router,
    private services:ServicesService
    ) { }
    ngOnInit(): void {
    
    if(!localStorage.getItem("token")){
      localStorage.clear()
      this.rout.navigateByUrl("/")
    }
    this.gettingUser();
  }
  logoutcancel() { 
    
    this.profile = false }

    logout() {

      if (this.profile == true) {

        this.profile = false

      }

      else this.profile = true

    }

  changeUser(event){
    console.log(event);
    this.access=event;
  }

  gettingUser(){
    this.services.getByEmail(localStorage.getItem("email")).subscribe((res:any)=>{
      localStorage.setItem("currentUser",JSON.stringify(res))
      this.userArray=res;
      console.log(res);
      },(error)=>{
      // console.log(JSON.stringify(error.error));
    })
  }
    profiles() {
      // this.indexes = this.profileName
      // this.rout.navigateByUrl('dashBoard/profile')
    }
    // else this.profile = true
  
  decision() {
    if (this.confirm == true) {
      this.confirm = false;
    } else this.confirm = true,
      this.profile = false
  }
  confirmlogout() {
    localStorage.clear();
    this.rout.navigateByUrl('/')
  }
  configuration() {
    this.config=!this.config
  }
  trainingMaster() {
    this.training=!this.training
  }
 UserManagement() {
    this.indexes = this.UsermanagementName
    this.rout.navigateByUrl("/dashBoard")
  }
  roleManagement() {
    this.indexes = this.roleManagementName
    this.rout.navigateByUrl("/dashBoard/roleManagement")
  }

  permissions() {
    this.indexes = this.permissionName
    this.rout.navigateByUrl("/dashBoard/permission")
  }
   trainingConfiguration() {
    this.indexes = this.trainingConfigurationName
    this.rout.navigateByUrl('/dashBoard/trainingConfiguration')
  }
  trainingInitiator() {
    this.indexes = this.trainingInitiatorName
    this.rout.navigateByUrl('/dashBoard/initiateTraining')
  }

  log(a){
      console.log(a);
      
  }


}
