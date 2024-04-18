import { Component, OnInit } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { TrainingPhaseComponent } from './training-phase.component';

@Component({
    selector: 'app-status-streams',
    template: `
    <button type="button"  style="border:none;background:transparent;padding:50px;color:#6a1b58;font-weight:700; "(click)=" onclick()"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
            {{value.length}}</button>
`,


    // styles: [
    //     `

    //     `
    // ]

})
export class Show implements ICellRendererAngularComp {

    public params: any;
    value: any;
    constructor(private thisComp:TrainingPhaseComponent) { }
    // gets called once before the renderer is used
    agInit(params: ICellRendererParams): void {
        this.params = params;
        this.value = params.value;

    }

    // gets called whenever the cell refreshes
    refresh(params: ICellRendererParams): boolean {
        return false;
    }

    onclick() {
        console.log(this.params)
        this.thisComp.setTech(this.params.node.data)
    }

}
