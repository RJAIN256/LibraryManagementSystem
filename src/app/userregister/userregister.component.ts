import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../Services/userservice.service';
import { Role } from '../variables/Role';
import { Users } from '../variables/user';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {
state:any;
  

  constructor(private userService:UserserviceService, private router: Router) { }

  ngOnInit(): void {
  }
  
  user: Users = {userid:null,firstName:'', lastName:'', mobileno:'', email:'', subscriptionDate:'',subscriptionStatus:'', subExpireDate:'', userAddress:{city:'', pincode:null, address1:'', address2:'', state:''},
                 user:{id:null,
                  username:'',
                  password:'',
                  role:Role.USER}}; 

                  togglePassword(){
                    if(this.state){
                      document.getElementById("form2Example29").setAttribute("type","password");
                      this.state =false;
                    }else{
                      document.getElementById("form2Example29").setAttribute("type","text");
                      this.state =true;
                    }
                  }


  onUserRegister(userRegister:any){
      //const userData = JSON.stringify(userRegister);
      console.log(this.user);
    //console.log("i am in ts "+userData);
  this.userService.onUserRegister(this.user).subscribe(data=>{
  alert('user created');
  this.router.navigate(['/homepage']);
}, 
error=>{
  if(error.status == 406)
  alert("Entered Field already exist")
  if(error.status == 400)
  alert("Enter Some Fields")
});
  

}
query(){

}

}


