import { Component, OnInit } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-read-cellrenderer',
  templateUrl: './read-cellrenderer.component.html',
  styleUrls: ['./read-cellrenderer.component.scss']
})
export class ReadCellrendererComponent implements OnInit {

  public params: any;
  value: any;
  isSuperAdmin:boolean;
  roleArray:any
constructor(){}
  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.params = params.rowIndex;
    this.roleArray=JSON.parse(localStorage.getItem("currentUser")).role.accessManagement.role_edit;
    this.isSuperAdmin=(params.node.data.head=="Super Admin");
  
  }

  // gets called whenever the cell refreshes
  refresh(params: ICellRendererParams):boolean {
    return false;
  }

  ngOnInit(): void {
  }

}
