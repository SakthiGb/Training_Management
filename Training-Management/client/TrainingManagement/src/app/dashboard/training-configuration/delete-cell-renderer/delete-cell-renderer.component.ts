import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Services } from 'src/app/shared/services';
import Swal from 'sweetalert2';
import { DetailPlanComponent } from '../detail-plan/detail-plan.component';

@Component({
  selector: 'app-delete-cell-renderer',
  templateUrl: './delete-cell-renderer.component.html',
  styleUrls: ['./delete-cell-renderer.component.scss']
})
export class DeleteCellRendererComponent implements ICellRendererAngularComp {

  public params: any;
  value: any;
  constructor(private service: Services, private DetailComp:DetailPlanComponent) { }
  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  // gets called whenever the cell refreshes
  refresh(params: ICellRendererParams): boolean {
    return false;
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
  showSuccessAlert() { Swal.fire('Done!', 'Saved Successfully!', 'success') }



  onclick() {
    Swal.fire({
      title: 'Please Confirm',
      text: 'Are you sure you want to Delete?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.isConfirmed) {
        // this.showDoneAlert()
        // this.addRoleForm.reset()
        let selectedNode = this.params.node;
        let selectedData = selectedNode.data;
        // this.service.deleteDetailPlaneById(this.params.node.data.id).subscribe((res:any) => {
        //   this.DetailComp.rowData=res.detailPlanList
        // })


        let d = document.getElementById("offcanvasRight")
        d?.classList.remove("show")
      }
      else if (result.isDismissed) {

      }
    })
  }


}
