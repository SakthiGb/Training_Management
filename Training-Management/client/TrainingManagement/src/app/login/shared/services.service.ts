import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
// import { AdduserService } from './adduser.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  getTrainingStreams() {
    throw new Error('Method not implemented.');
  }
  setter(streamsData: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient,
    // private user: AdduserService
    ) { }
  authenticate(data: any) {
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

}
