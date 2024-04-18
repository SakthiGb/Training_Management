import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Services } from 'src/app/shared/services';
import   Swal from 'sweetalert2';
import { Show } from './show';
import { DeleteTrainingPhaseComponent } from './cellrenderer/deleteTrainingPhase';
import { DetailPlanTraingPhaseComponent } from './cellrenderer/detailPlanTrainingPhase.ts';
import { EditTrainingPhaseComponent } from './cellrenderer/editTrainingPhase';


@Component({
  selector: 'app-training-phase',
  templateUrl: './training-phase.component.html',
  styleUrls: ['./training-phase.component.scss']
})
export class TrainingPhaseComponent implements OnInit {
  gridApiActive: any;
  Data: any = []
  rowData: any
  TrainingId:Number
  formname:any
  title:string=""
  showGridTitle=""
  technologyGrid:any=[]
  constructor(private fb: FormBuilder, private rout: Router,private service:Services,private routParam:ActivatedRoute) { }

  ngOnInit(): void {
    this.TrainingId = Number(this.routParam.snapshot.paramMap.get('id'))
    this.getPhaseByTrainingId(this.TrainingId);
  }

  getPhaseByTrainingId(id) {
    this.service.getPhaseByTrainingId(id).subscribe((res: any) => {
      this.rowData = res.trainingPhase
      this.title = res.name
    },
      (error) => {
        this.rowData = []
      })
  }

  




  columnDefs = [
    { headerName: "Phase Name", field: "name", filter: "agTextColumnFilter", width: 180 },
    { headerName: "Technology", field: "technologyList", width: 130 ,cellRenderer:Show  },
    { headerName: "Level", field: "level", width: 180 },
    { headerName: "Detail Plan",field:"id", width: 180, cellRenderer: DetailPlanTraingPhaseComponent },
    { headerName: "Duration", field: "duration", width: 130 },
    { headerName: "Edit", width: 130, cellRenderer: EditTrainingPhaseComponent },
    { headerName: "Delete", field: "id", width: 130, cellRenderer: DeleteTrainingPhaseComponent }
  ];

  showColDefs = [
    { headerName: "Technology", field: "technology.name",Width:100},
    { headerName: "Description", field: "technology.description",Width:100  },
    { headerName: "Level", field: "levelId",Width:100 ,cellRenderer:(params)=>{
      return (params.value.low?"Low":params.value.medium?"Medium":params.value.high?"High":"-")
    } },

    { headerName: "Active", field:"active", width:100},
  ];

  setTech(data)
  {
    console.log(data);
    this.showGridTitle=data.name
    this.technologyGrid=data.technologyList
    
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

  addPhase() {
    this.rout.navigate(["dashBoard/addPhase",{id:this.TrainingId}])
  }
  editPhase(i:any){
    
  }
  Save() {

  }
  editTrainingPhase(i: any) {

  }

  cancel() {

    Swal.fire({
      title: 'Do you like to close?',
      allowOutsideClick: false,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
      }
    })
  }
  


  backEvent() {
    history.back()

  }
}
