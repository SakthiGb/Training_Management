import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { streamsenvironment } from 'src/environments/streamsenvironment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  getPhaseByTrainingId(arg0: { rolename: any; description: any; active: any; }) {
    throw new Error('Method not implemented.');
  }

  constructor(
    private http: HttpClient  ) { }



  getByEmail(email:string){
    console.log(email);
    
     return this.http.post(environment.Base_Url+"/getByEmail",email)
  }
// ////////////////////////////////////////////////////////////////////////////////////

  authenticate(data: any) {
    localStorage.setItem("email",data.username)
    return this.http.post(environment.Base_Url + "/authenticate", data);
  }
  requestOtp(data: any) {
    return this.http.post(environment.Base_Url + "/sentOtp", data);
  }
  confirmOtp(data: any) {
    return this.http.post(environment.Base_Url + "/confirm", data);
  }

  resetPassword(data: any) {
    return this.http.post(environment.Base_Url + "/changePasswd", data);
  }
///////////////////////////////////////////////////////////////////////////////////////

  getAllUser(){
    return this.http.post(environment.Base_Url+"/getAll",JSON.parse(localStorage.getItem("currentUser")).username)
  }
  getRole(){
    return this.http.post(environment.Base_Url+"/getRole",JSON.parse(localStorage.getItem("currentUser")).username)
  }
  saveUser(data:any){
    return this.http.post(environment.Base_Url+"/saveuser",data)

  }
  saveRole(data:any){
  
  }
}
