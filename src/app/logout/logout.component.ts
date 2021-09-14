import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BookserviceService} from '../Services/bookservice.service'
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private loginService: BookserviceService,
    private router: Router) {

  }

  ngOnInit() {
    this.loginService.logOut();
    this.router.navigate(['login']);
  }

}

