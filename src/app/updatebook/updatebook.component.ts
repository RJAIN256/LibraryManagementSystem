import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{BookserviceService } from '../Services/bookservice.service'
import { Books } from '../variables/book';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

  obj1: any;
  book: Books[];
  message: string;
  constructor(private myservice: BookserviceService, private router: Router) {
    this.obj1 = this.myservice.updateMethod();
  }
  onUpdate(book: Books): any {
    return this.myservice.onUpdate(this.obj1).subscribe(data => {
      alert("book update successfuly")
      this.router.navigate(['/bookviewdata'])
    });
  }
  ngOnInit(): void {
  }

}
