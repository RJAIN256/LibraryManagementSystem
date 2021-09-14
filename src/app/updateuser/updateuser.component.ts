import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../Services/userservice.service';
import { Role } from '../variables/Role';
import { Users } from '../variables/user';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  user: Users =  {userid:null,firstName:'', lastName:'', mobileno:'', email:'', subscriptionDate:'',subscriptionStatus:'', subExpireDate:'', userAddress:{city:'', pincode:null, address1:'', address2:'', state:''},
  user:{id:null,
   username:'',
   password:'',
   role:Role.USER}}; 
  constructor(private userService:UserserviceService, private router: Router) { }
  ngOnInit(): void {
  }
userUpdate(){
  console.log(this.user);
    //console.log("i am in ts "+userData);
  this.userService.onUserRegister(this.user).subscribe(data=>{
  console.log("Updated succ" +data);
  },

  )}

}
