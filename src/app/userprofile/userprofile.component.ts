import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../Services/userservice.service';
import { Users } from '../variables/user';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private userService: UserserviceService, private router: Router) { }
user:Users;
  ngOnInit(): void {
    this.userService.getUserId().subscribe(
      response => {console.log(response) ;this.handleSuccessfulResponse(response)},
    );
  }

  handleSuccessfulResponse(response:any) {
    this.user = JSON.parse(response);
    console.log(this.user,"my uer");
  }
  cancelSubscription(user:Users){
    var selection= confirm("Are you sure !!")
    if(selection==true){
this.userService.cancelsubscription(user.userid).subscribe(data=>{
  alert("Subscription Canceled")
},);}
this.router.navigate(['/userprofile']);
}
update(updateUser:Users){
  this.userService.onUserRegister(this.user).subscribe(data=>{
    alert("User Updated");
    },)
    this.router.navigate(['/userprofile']);
  }


}
