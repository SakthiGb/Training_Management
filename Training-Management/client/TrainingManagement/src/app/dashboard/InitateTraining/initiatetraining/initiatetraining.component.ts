import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { CellrenderComponent } from '../cellrender/cellrender.component';

@Component({
  selector: 'app-initiatetraining',
  templateUrl: './initiatetraining.component.html',
  styleUrls: ['./initiatetraining.component.scss']
})
export class InitiatetrainingComponent implements OnInit {
  user: boolean = false;
  formname:any;
  rowData:any =[]; 
  gridApiActive:any;
  searchtext:any;
  a: any = 10;
websiteList: any = ['10', '20', '30']
  constructor( private dash: DashboardComponent,
    )
     {
      this.dash.name = { "names": "" }
    }

  ngOnInit(): void {
    this.dash.trainingInitiator();



    this. rowData= [{
      Training:"JAVA",
    Technology: 5,
    Duration: 'Internal',
     level: 4,
     UpdatedOn:'11/09/22',
     UpdatedBy:'11/09/22',
     Status: "Pending"
         },
  
        {
          Training:".NET",
          Technology: 4,
          Duration: 'Internal',
           level: 4,
           UpdatedOn:'11/09/22',
           UpdatedBy:'11/09/22',
           Status: "Pending"
        }
  ];
  }

onGridReady1(params:any){
  this.gridApiActive=params.api
  params.api.sizeColumnsToFit();
}
changeWebsite(e: any) {
  if (e.target.value == e.target.value) {
    this.a = e.target.value
  }
  else (
    this.a = 5
  );
}

onFilterTextBoxChanged() {
  this.gridApiActive.setQuickFilter(this.searchtext)
  }

  columnDefs=[
  {field:"Training",sortable:true,filter:"agTextColumnFilter", resizable:true },
  {headerName:"Technology",field:"Technology"},
  {headerName:"Duration",field:"Duration"},
  {headerName:"level",field:"level"},
  {headerName:" UpdatedBy",field:" UpdatedBy", filter: "agDateColumnFilter", resizable:true},
  {headerName:" UpdatedOn",field:" UpdatedOn", filter: "agDateColumnFilter"},
  {headerName:"Status",field:"Status",cellRenderer:CellrenderComponent,resizable:true},
 
]

trainingInitiations(){
  if (this.user == true) {
    this.user = false
  } else {
    this.user = true
  }
}
}
