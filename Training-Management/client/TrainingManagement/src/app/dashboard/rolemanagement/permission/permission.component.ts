import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GridOptions } from 'ag-grid-community';
import { ServicesService } from 'src/app/services/services.service';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { AddCellrendererComponent } from './add-cellrenderer/add-cellrenderer.component';
import { DeleteCellrendererComponent } from './delete-cellrenderer/delete-cellrenderer.component';
import { EditCellrendererComponent } from './edit-cellrenderer/edit-cellrenderer.component';
import { ReadCellrendererComponent } from './read-cellrenderer/read-cellrenderer.component';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss']
})
export class PermissionComponent implements OnInit {



  selectedModule="";
  navi: any = null;
  list = [
    {
      value: 'Configuration',
      status: false,
      option: [
        "User Management",
        "Role Management",
        "Permission"
      ]
    },
    {
      value: "Training Master",
      status: false,
      option: [
        "Training Configuration",
        "Iniate Training"
      ]
    },
    {
      value: "My Training",
      status: false
    }

  ]

  public gridOptions: GridOptions; // This is the component variable of type GridOptions  
  // variable that will hold data of rows  
  public columnDefs: any[]; // Grid’s column definiation  
  gridApiActive: any;
  
  constructor(private rout: Router,private service:ServicesService, private dash: DashboardComponent,
    ) {
      this.dash.name = { "names": "" }
    }
  

  rowData = [{
    head: "Super Admin",

  },
  {
    head: "Master Trainee",

  },
  {
    head: "Trainer",

  },
  {
    head: "Trainee",

  }
  ]
  ngOnInit(): void {
    this.dash.permissions();
    
    this.gridOptions = <GridOptions>{
    onGridReady: () => {
      this.gridOptions.api.sizeColumnsToFit();
    }
  }; //Defining data for columns  
  this.columnDefs = [
    { headerName: "", field: "head", width: 400 },
    { headerName: "Read", field: "Read", width: 200, cellRenderer: ReadCellrendererComponent },
    { headerName: "Add", field: "Add", width: 300, cellRenderer: AddCellrendererComponent },
    { headerName: "Edit", field: "Edit", width: 300, cellRenderer: EditCellrendererComponent },
    { headerName: "Delete", field: "Delete", width: 300, cellRenderer: DeleteCellrendererComponent }
  ];
  }


  select(event1: string, event2: string) {
    this.navi = event1.toLocaleUpperCase() + " / " + event2
    console.log(event1, event2);
    this.selectedModule=event2;
    // this.rout.navigateByUrl(`/${event1.toLocaleLowerCase()}/${event2}`);

  }

  onGridReady1(params: any) {
    this.gridApiActive = params.api
  }






}
