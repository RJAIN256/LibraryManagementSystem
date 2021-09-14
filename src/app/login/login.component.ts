import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BookserviceService} from '../Services/bookservice.service'
import { DAOUser } from '../variables/DaoUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
state:any;
  constructor(private bookService:BookserviceService,private router:Router) { }
  user:DAOUser=new DAOUser();
  invalidLogin = false
  
  @Input() error: string ="";
  ngOnInit() {
  }
  login(loginForm:any) {
      (this.bookService.authenticate(loginForm.username, loginForm.password).subscribe(
        data => {
          this.router.navigate([''])
          this.invalidLogin = false
        },
        error=>{
          if(error.status == 406)
          alert("Invalid credential")
          if(error.status == 400)
          alert("Invalid credential")
        })
      );
  }
  togglePassword(){
    if(this.state){
      document.getElementById("pwd").setAttribute("type","password");
      this.state =false;
    }else{
      document.getElementById("pwd").setAttribute("type","text");
      this.state =true;
    }
  }
}

