import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { Level } from 'src/app/model/Level';
import { PhaseMappingTechnology } from 'src/app/model/PhaseMappingTechnology';
import { Technology } from 'src/app/model/Technology';
import { TrainingPhase } from 'src/app/model/TrainingPhase';
import { Services } from 'src/app/shared/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-phase',
  templateUrl: './add-phase.component.html',
  styleUrls: ['./add-phase.component.scss']
})
export class AddPhaseComponent implements OnInit {
  user: boolean = false;
  rolelist: boolean = true;
  addRoleForm: any;
  technology: any = []
  phases = ["L1", "L2", "L3", "L4", "L5", "L6"]
  TrainingId:number

  constructor(private fb: FormBuilder, private rout: Router, private service: Services,private routParam:ActivatedRoute) { }
  ngOnInit(): void {
    this.TrainingId = Number(this.routParam.snapshot.paramMap.get('id'))
    this.getTechnoogy()
  }

  getTechnoogy() {
    this.service.getTechnology().subscribe((res: any) => {

      console.log(res);

      res.forEach(e => {
        console.log(e);
        let Temp = new Technology
        Temp.id = e.id
        Temp.name=e.name
        Temp.active = e.active

        let l= new Level
        l.id=1
        this.technology.push({
          active: false,
          technology: Temp,
          levelId: l
        })
      })
      console.log(this.technology);

    })
  }

  setData: any

  onSubmit(formData) {
    console.log(formData.value);
    console.log(this.technology);
    let mappedData = this.mapToModel(formData.value, this.technology);
    console.log("mapped Data");

    console.log(mappedData);
    this.service.savePhaseByTrainningId(this.TrainingId,mappedData).subscribe((res)=>{
      history.back()
    })


  }

  mapToModel(data, listTechnology) {

    let techList:any[]=[];
    listTechnology.forEach(e=>{
      if(e.active){
        techList.push(e)
      }
    })

    let phase = new TrainingPhase();
    phase.id = null
    phase.active = data.active
    phase.duration = data.duration
    phase.name = data.name
    phase.level = data.level
    phase.description = data.description
    phase.detailPlanList = []
    phase.technologyList=techList

    return phase;

  }


  cancel() {
    history.back()
  }

  showDoneAlert() {

    Swal.fire('Done!', 'Cancelled Successfully!', 'success')

  }
  showSuccessAlert() {

    Swal.fire('Done!', 'Saved Successfully!', 'success')

  }



}
