import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookreturnedserviceService } from '../Services/bookreturnedservice.service';
import { BooksReturned } from '../variables/returnbook';

@Component({
  selector: 'app-updatereturnedbook',
  templateUrl: './updatereturnedbook.component.html',
  styleUrls: ['./updatereturnedbook.component.css']
})
export class UpdatereturnedbookComponent implements OnInit {

  obj1: any;
  book: BooksReturned[];
  message: string;
  constructor(private myservice: BookreturnedserviceService, private router: Router) {
    this.obj1 = this.myservice.updateMethod();
  }
  onUpdate(book: BooksReturned): any {
    return this.myservice.onUpdate(this.obj1).subscribe(data => {
      alert("book update successfuly")
      this.router.navigate(['/viewreturnbook'])
    });
  }
  ngOnInit(): void {
  }
}
