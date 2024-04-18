import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailPlan } from 'src/app/model/DetailPlan';
import { TrainingPhase } from 'src/app/model/TrainingPhase';
import { Services } from 'src/app/shared/services';
import Swal from 'sweetalert2';
import { EditPlandetailComponent } from '../edit-cell-renderers/edit-plandetail/edit-plandetail.component';
import { DeleteDetailPlanComponent } from './cellrenderer/deleteDetailPlan';
import { EditDetailPlanComponent } from './cellrenderer/editDetailPlan';

@Component({
  selector: 'app-detail-plan',
  templateUrl: './detail-plan.component.html',
  styleUrls: ['./detail-plan.component.scss']
})
export class DetailPlanComponent implements OnInit {
  Data: any = [];
  confirm: boolean = false;
  rowData: any = []
  a: any = 10;
  websiteList: any = ['10', '20', '30'];
  masterMsg: any = [];
  formname: string;
  count = 0;
  title = ""
  phaseId: number;
  user: boolean = false;
  rolelist: boolean = true;

  constructor(private rout: Router, private fb: FormBuilder, private service: Services, private routerParam: ActivatedRoute) { }

  ngOnInit(): void {
    this.phaseId = Number(this.routerParam.snapshot.paramMap.get("id"))
    this.getPhaseById(this.phaseId);

  }


  getPhaseById(id) {
    this.service.getPhaseById(id).subscribe((res: any) => {
      this.rowData = res.detailPlanList

      this.title = res.name
    })

  }



  columnDefs = [
    { headerName: "Day", field: "day", filter: "agTextColumnFilter", width: 90 },
    { headerName: "Topics", field: "topic", filter: "agTextColumnFilter", width: 120 },
    { headerName: "Topic Hrs", field: "topicHrs", width: 135 },
    { headerName: "Assessment", field: "assessment", width: 150 },
    { headerName: "Assesment Hrs", field: "assessmentHrs", width: 150 },
    { headerName: "practice", field: "practice", width: 135 },
    { headerName: "Practice Hrs", field: "practiceHrs", width: 135 },
    { headerName: "RealtimeProject", field: "project", width: 180 },
    { headerName: "RealtimeProject Hrs", field: "projectHrs", width: 180 },
    { headerName: "Edit", width: 120, cellRenderer: EditDetailPlanComponent },
    // { headerName: "Delete", width: 120, cellRenderer: DeleteDetailPlanComponent },

  ];
  changeWebsite(e: any) {

    if (e.target.value == e.target.value) {
      this.a = e.target.value
    }
    else (
      this.a = 5
    );
  }

  addPlan = this.fb.group({
    id: [''],
    day: [''],
    topic: [''],
    topicHrs: [''],
    assessment: [''],
    assessmentHrs: [''],
    practice: [''],
    practiceHrs: [''],
    project: [''],
    projectHrs: [''],
  })
  countOn(): void {
    this.count = this.rowData.length
  }

  editDetailPlan(i: any) {
    this.formname = "Edit";
    if (this.confirm == true) {
      this.confirm = false;
    } else this.confirm = true;
    this.addPlan.setValue({
      id: this.rowData[i].id,
      day: this.rowData[i].day,
      topic: this.rowData[i].topic,
      topicHrs: this.rowData[i].topicHrs,
      assessment: this.rowData[i].assessment,
      assessmentHrs: this.rowData[i].assessmentHrs,
      practice: this.rowData[i].practice,
      practiceHrs: this.rowData[i].practiceHrs,
      project: this.rowData[i].project,
      projectHrs: this.rowData[i].projectHrs
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
          this.saveDetailPlans(this.addPlan.value)
          this.showSuccessAlert()
          this.decision();
          this.addPlan.reset()
          console.log(this.phaseId)

        } else if (result.isDismissed) { }
      })
  }
  saveDetailPlans(datas: any) {
    let data = this.mapToModel(this.addPlan.value);
    console.log(data)
    this.service.saveDetailPlan(data).subscribe((res) => {
      this.getPhaseById(this.phaseId);

    }
    )
  }
  mapToModel(datas: any) {
    let detailPlan = new DetailPlan();
    detailPlan.id = datas.id?Number(datas.id):null;
    detailPlan.day = Number(datas.day?datas.day:this.rowData.length + 1);
    detailPlan.topic = datas.topic;
    detailPlan.isActive = Boolean(datas.isActive);
    detailPlan.topicHrs = datas.topicHrs;
    detailPlan.assessment = datas.assessment;
    detailPlan.assessmentHrs = datas.assessmentHrs;
    detailPlan.practice = datas.practice;
    detailPlan.practiceHrs = datas.practiceHrs;
    detailPlan.project = datas.project;
    detailPlan.projectHrs = datas.projectHrs;
    let trainingPhase = new TrainingPhase();
    trainingPhase.id = Number(this.phaseId);
    detailPlan.trainingPhase = trainingPhase
    return detailPlan;


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
          this.decision();
          this.addPlan.reset();
        }
        else if (result.isDismissed) {

          this.addPlan.reset()
        } else if (result.isDismissed) { }
      })
  }

  decision() {
    this.formname = "Add"
    if (this.confirm == true) {
      this.confirm = false;
    } else this.confirm = true;
  }

  backEvent() {
    history.back()
  }

  showDoneAlert() {

    Swal.fire('Done!', 'Cancelled Successfully!', 'success')

  }
  showSuccessAlert() {

    Swal.fire('Done!', 'Saved Successfully!', 'success')

  }


}


