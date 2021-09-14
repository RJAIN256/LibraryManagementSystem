import { Component, OnInit } from '@angular/core';
import { DAOUser } from '../variables/DaoUser';
import {AdminregisterserviceService} from '../Services/adminregisterservice.service'
import { Admin } from '../variables/admin';
import { Role } from '../variables/Role';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeradmin',
  templateUrl: './registeradmin.component.html',
  styleUrls: ['./registeradmin.component.css']
})
export class RegisteradminComponent implements OnInit {
error:any;
  constructor(private adminService: AdminregisterserviceService, private router:Router) { }

  ngOnInit(): void {
  }
  admin:Admin={id:null,user:{ id:null,
    username:'',
    password:'',
    role:Role.ADMIN}};
  onSubmit(addAdmin:DAOUser):any{
    console.log(this.admin);
     this.adminService.addAdmin(this.admin).subscribe(data => {
      alert('admin registered')
      this.router.navigate(['/login']);
      
    }, error=>{
      if(error.status == 406)
      alert("Entered Field already exist")
      if(error.status == 400)
      alert("Enter Some Fields")
    });
   
  }

}
