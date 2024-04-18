import { Component, OnInit } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-edit-cellrenderer',
  templateUrl: './edit-cellrenderer.component.html',
  styleUrls: ['./edit-cellrenderer.component.scss']
})
export class EditCellrendererComponent implements OnInit {


  public params: any;
  value: any;
  isSuperAdmin:boolean;
  roleArray:any;
constructor(){}
  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.params = params.rowIndex;
    this.isSuperAdmin=(params.node.data.head=="Super Admin");
    this.roleArray=JSON.parse(localStorage.getItem("currentUser")).role.accessManagement.role_edit;
  
  }

  // gets called whenever the cell refreshes
  refresh(params: ICellRendererParams):boolean {
    return false;
  }

  ngOnInit(): void {
  }

}
