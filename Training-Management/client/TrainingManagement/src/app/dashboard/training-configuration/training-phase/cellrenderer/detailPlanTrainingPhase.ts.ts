import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-pending',
  template: `<p (click)= "detailPlan()">Pending</p>
  `,
  styles: [`p{
    color:#741e5b;
    margin-bottom: 0%;
 }`]
})
export class DetailPlanTraingPhaseComponent implements ICellRendererAngularComp{
  name:any;
  public params: any;
  value: any;
  
  constructor(private route:Router){}
 
  agInit(params: ICellRendererParams): void {
    this.params = params;
    this.value=params.value
  }

  refresh(params: ICellRendererParams):boolean {
    return false;
  }
  detailPlan(){
    this.route.navigate(['/dashBoard/detailPlan',{id:this.value}])
  }

}