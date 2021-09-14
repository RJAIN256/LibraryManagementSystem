import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../Services/userservice.service';
import { Users } from '../variables/user';

@Component({
  selector: 'app-viewallusers',
  templateUrl: './viewallusers.component.html',
  styleUrls: ['./viewallusers.component.css']
})
export class ViewallusersComponent implements OnInit {
  userList:Users[];
  user:Users;
  constructor(private userService: UserserviceService, private router: Router) { }
  
    ngOnInit(): void {
      this.userService.getUser().subscribe(
        response => {console.log(response) ;this.handleSuccessfulResponse(response)},
      );
    }
  
    handleSuccessfulResponse(response:any) {
      this.userList = JSON.parse(response);
      console.log(this.userList,"my uer");
    }
    onSubmit(b:Users){
      this.user = b;
    }
}
