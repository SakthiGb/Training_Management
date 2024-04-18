import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Services } from 'src/app/shared/services';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-delete-technology',
    template: `<i class="bi bi-trash" (click)="onclick()"></i>`,
    styles: [`i{
    color: #c53e3f;
    font-size: larger;
}`]
})
export class DeleteTechnologyComponent implements ICellRendererAngularComp {

    public params: any;
    value: any;
    constructor(private service: Services) { }
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
                this.showDoneAlert();
                let selectedNode = this.params.node;
                let selectedData = selectedNode.data;
                this.service.deleteTechnology(this.params.node.data.id).subscribe((res) => {
                })
                this.params.api.updateRowData({ remove: [selectedData] });
            }
            else if (result.isDismissed) {
            }
        })
    }


}



