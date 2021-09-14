import { Component } from '@angular/core';
import{BookserviceService} from './Services/bookservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LibraryManagementSystem';
  constructor(public loginService:BookserviceService){}

}

