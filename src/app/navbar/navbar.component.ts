import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../Services/bookservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public loginService:BookserviceService) { }

  ngOnInit(): void {
  }

}
