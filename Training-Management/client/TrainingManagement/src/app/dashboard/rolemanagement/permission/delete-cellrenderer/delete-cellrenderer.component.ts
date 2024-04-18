import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular/lib/interfaces';
import { ICellRendererParams } from 'ag-grid-community';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-delete-cellrenderer',
  templateUrl: './delete-cellrenderer.component.html',
  styleUrls: ['./delete-cellrenderer.component.scss']
})
export class DeleteCellrendererComponent implements ICellRendererAngularComp {
a:boolean=true
bool:boolean=false
roleArray: any
  public params: any;
  isSuperAdmin:boolean
  value: any;
constructor(private check:ServicesService){

// if(this.roleArray.role.accessManagement.role_delete)

}
  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.roleArray=JSON.parse(localStorage.getItem("currentUser")).role.accessManagement.role_edit;
    // console.log(this.roleArray);
    // console.log(params.node.data.head=="Super Admin" );
    
    this.isSuperAdmin=(params.node.data.head=="Super Admin")
  
  
    
    this.params = params.rowIndex;
  }

  // gets called whenever the cell refreshes
  refresh(params: ICellRendererParams):boolean {
    return false;
  }


}
