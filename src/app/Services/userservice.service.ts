import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../variables/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  http:HttpClient ;
  httpService: any;
  constructor(private http1:HttpClient) {
    this.http = http1;
   }

  onUserRegister(userDetail:Users){
    console.log("i am in service" +userDetail );
    return this.http1.post("http://localhost:8587/user/registerUsers", userDetail);
  }
  public updateProfile(updateuser:Users) {
    console.log("in User update");
    
    return this.http1.put("http://localhost:8587/user/updateUserDetails", updateuser);
  }
  public getUser(){
    console.log(" service get user");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http1.get<Users>("http://localhost:8587/user/viewAllUsers");
  }
  public getUserId(){
    let userId=sessionStorage.getItem("UserId")
    return this.http1.get<Users>("http://localhost:8587/user/viewuser/"+userId);
  }
  public cancelsubscription(id:number){
    console.log(" sub=scription cancelled");
    console.log(id);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http1.get<Users>("http://localhost:8587/user/cancelSubscription/" +id);
  }
}
