import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderbookserviceService } from '../Services/orderbookservice.service';
import { BooksOrder } from '../variables/BookOrder';

@Component({
  selector: 'app-vieworderbook',
  templateUrl: './vieworderbook.component.html',
  styleUrls: ['./vieworderbook.component.css']
})
export class VieworderbookComponent implements OnInit {
  book: BooksOrder;

  constructor(private orderBook:OrderbookserviceService, private router:Router) { }

  orderBookList : BooksOrder[];
  ngOnInit(): any {
    this.orderBook.getAllOrderBooks().subscribe(
      response => {this.handleSuccessfulResponse(response)}
    );
  }

  handleSuccessfulResponse(response) {
    this.orderBookList =JSON.parse(response) ;
     console.log(this.orderBookList);
    // console.log(JSON.parse(this.bookList), 'jason print')
  }
  update(book: BooksOrder) {
    this.orderBook.update(book);
    this.router.navigate(["/updateorderbook"]); //updating the order book
  }
  delete(deletebook: BooksOrder): any {
   var selction= confirm("Are you sure !!")
   if(selction==true){
    this.orderBookList.splice(this.orderBookList.indexOf(deletebook), 1);
    this.orderBook.delete(deletebook.orderId).subscribe(data => {
      alert(data);
    });}
    this.router.navigate(["/vieworderbook"]);
  }
  onSubmit(b:BooksOrder){
    this.book = b;
  }

}
