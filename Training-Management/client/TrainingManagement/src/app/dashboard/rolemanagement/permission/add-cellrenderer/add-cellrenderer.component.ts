import { Component, OnInit } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-add-cellrenderer',
  templateUrl: './add-cellrenderer.component.html',
  styleUrls: ['./add-cellrenderer.component.scss']
})
export class AddCellrendererComponent implements OnInit {

  public params: any;
  value: any;
  isSuperAdmin:boolean;
  roleArray:boolean
constructor(){}
  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.params = params.rowIndex;
    this.isSuperAdmin=(params.node.data.head=="Super Admin");
    this.roleArray=JSON.parse(localStorage.getItem("currentUser")).role.accessManagement.role_edit;
    console.log("super : "+this.isSuperAdmin);
    console.log("permission : "+this.roleArray);
    console.log("resule : "+( this.isSuperAdmin || !this.roleArray ));
    
    


  }

  // gets called whenever the cell refreshes
  refresh(params: ICellRendererParams):boolean {
    return false;
  }

  ngOnInit(): void {
  }

}
