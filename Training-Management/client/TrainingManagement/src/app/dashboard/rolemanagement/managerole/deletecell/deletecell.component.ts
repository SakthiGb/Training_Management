import { Component, OnDestroy } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Services } from 'src/app/shared/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deletecell',
  templateUrl: './deletecell.component.html',
  styleUrls: ['./deletecell.component.scss']
})

export class DeletecellComponent implements ICellRendererAngularComp,OnDestroy  {

  public params: any;

  value: any;

  constructor(private service: Services) { }

  // gets called once before the renderer is used

  agInit(params: ICellRendererParams): void {

    this.params = params;

  }
ngOnDestroy():void{

}




  refresh(params: ICellRendererParams): boolean {

    return false;

  }

  btnClickedHandler() {
    let selectedNode = this.params.node;
    let selectedData = selectedNode.data;
    this.params.api.updateRowData({ remove: [selectedData] });
  }

  ActiveAlert() {
    Swal.fire('Done!', 'Status Active!', 'success')
  }
  NotActiveAlert() {
    Swal.fire('Done!', 'Status Not active!', 'success')
  }
  showDoneAlert() {
    Swal.fire('Done!', 'Deleted Successfully!', 'success')
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

        let selectedNode = this.params.node;
        let selectedData = selectedNode.data;
        this.service.deleteTraining(this.params.node.data.id).subscribe((res) => {
          this.showDoneAlert();
          console.log("deleted");
          
        },(error)=>{
          console.log(error.error);
          
        })
        this.params.api.updateRowData({ remove: [selectedData] });
      }
      else if (result.isDismissed) {
      }
    })
  }

}
