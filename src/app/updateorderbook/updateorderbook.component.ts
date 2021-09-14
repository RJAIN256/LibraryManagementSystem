import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderbookserviceService } from '../Services/orderbookservice.service';
import { BooksOrder } from '../variables/BookOrder';

@Component({
  selector: 'app-updateorderbook',
  templateUrl: './updateorderbook.component.html',
  styleUrls: ['./updateorderbook.component.css']
})
export class UpdateorderbookComponent implements OnInit {

  obj1: any;
  book: BooksOrder[];
  message: string;
  constructor(private orderBook:OrderbookserviceService, private router: Router) {
    this.obj1 = this.orderBook.updateMethod();
    console.log(this.obj1);
  }
  onUpdate(book: BooksOrder): any {
    return this.orderBook.onUpdate(this.obj1).subscribe(data => {
      alert("book update successfuly")
      this.router.navigate(["/vieworderbook"])
    });
  }
  ngOnInit(): void {
  }
}
