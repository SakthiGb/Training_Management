import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Cellrender1Component } from '../cellrender1/cellrender1.component';

@Component({
  selector: 'app-training-initiation',
  templateUrl: './training-initiation.component.html',
  styleUrls: ['./training-initiation.component.scss']
})
export class TrainingInitiationComponent implements OnInit {

  btn: boolean = true
  rowData:any =[]; 
  gridApiActive:any;
  searchtext:any;
  a: any = 10;
  websiteList: any = ['10', '20', '30']
  onGridReady1(params:any){
    this.gridApiActive=params.api
    params.api.sizeColumnsToFit();
  }
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this. rowData= [{
    Technology: ".Net",
    Trainer: 'Kapil',
     UpdatedOn:'11/08/22',
     UpdatedBy:'Brajesh',
         },
  
        {
          Technology:"Java",
          Trainer: "Brajesh",
           UpdatedOn:'1/09/22',
           UpdatedBy:'Brajesh',
        },
        {
          Technology:"MySql",
          Trainer: "Seshan",
           UpdatedOn:'10/11/22',
           UpdatedBy:'Brajesh',
        },
  ];
  }

  // TrainingDetails = this.fb.group({
  //   StartDate: ['',[Validators.required]],
  //   EndDate: ['',[Validators.required]],
  //   SelectTechnology: ['',[Validators.required]],
  //   SearchTrainer: ['',[Validators.required]],
  // });

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

    columnDefs=[
    {headerName:"Technology",field:"SelectTechnology"},
    {headerName:"Trainer",field:"SearchTrainer"},
    {headerName:" UpdatedBy",field:"UpdatedBy", resizable:true},
    {headerName:" UpdatedOn",field:"StartDate", filter: "agDateColumnFilter"},
    {headerName:"Remove",field:"Remove",cellRenderer:Cellrender1Component,resizable:true},
   
  ];

  plus_fun() {
    this.btn = false;
    
  }

  minus_fun() {
    this.btn = true;
  }
}
