import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { streamsenvironment } from 'src/environments/streamsenvironment';

@Injectable({
    providedIn: 'root'
})
export class Services {
    details: any;

    constructor(private http: HttpClient) { }
    getter() {
        return this.details
    }
    setter(data: any) {
        this.details = data;
    }


    //    ============Training============
    getTraining() {
        return this.http.get(streamsenvironment.Base_Url + "/getTraining")
    }
    saveTraining(data: any) {
        return this.http.post(streamsenvironment.Base_Url + "/postTraining", data);
    }
    deleteTraining (trainid:number):Observable<number>{
        return this.http.delete<number>(streamsenvironment.Base_Url+ "/deleteTraining/"+trainid);
    }
    //    ============Training============
    getStreamType() {
        return this.http.get(streamsenvironment.Base_Url + "/getStreamType")
    }
    //    ============Streams============
    getStreams() {
        return this.http.get(streamsenvironment.Base_Url + "/getStreams")
    }
    saveStreams(data: any) {
        return this.http.post(streamsenvironment.Base_Url + "/postStream", data);
    }

    deleteStreams(streamid: number): Observable<number> {
        return this.http.delete<number>(streamsenvironment.Base_Url + "/deleteStream/" + streamid);
    }
    //  ============technology============
    getTechnology() {
        return this.http.get(streamsenvironment.Base_Url + "/getTechnology")
    }
    saveTechnology(data: any) {
        return this.http.post(streamsenvironment.Base_Url + "/postTechnology", data);
    }
    deleteTechnology(techid: Number): Observable<number> {
        return this.http.delete<number>(streamsenvironment.Base_Url + "/deleteTechnology/" + techid);
    }
    // ===================Training Phase=============================
    getPhaseByTrainingId(id:Number){
        return this.http.get(streamsenvironment.Base_Url+"/getPhaseByTrainingId/"+id)
    }
    savePhaseByTrainningId(trainingId,phaseData){
        return this.http.post(streamsenvironment.Base_Url+"/savePhaseByTrainingId/"+trainingId,phaseData)
    }
    deleteByPhaseId(id:Number){
        return this.http.delete(streamsenvironment.Base_Url+"/deleteByPhaseId/"+id)
    }
    getPhaseById(id){
        return this.http.get(streamsenvironment.Base_Url+"/getPhaseById/"+id)
    }
    ///////////////////////////////////detail Plan///////////////////////////////////////
    deleteDetailPlan(id){
        return this.http.delete(streamsenvironment.Base_Url+"/deleteDetailPlanById/"+id)
    }
    saveDetailPlan(data: any) {
        return this.http.post(streamsenvironment.Base_Url + "/saveDetailPlan", data);
    }

}
