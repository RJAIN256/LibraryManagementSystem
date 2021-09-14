import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookserviceService } from '../Services/bookservice.service';
import { OrderbookserviceService } from '../Services/orderbookservice.service'
import { Books } from '../variables/book';
import { BooksOrder } from '../variables/BookOrder';
@Component({
  selector: 'app-orderbook',
  templateUrl: './orderbook.component.html',
  styleUrls: ['./orderbook.component.css']
})
export class OrderbookComponent implements OnInit {
  message:String;
  booktitle:any;
booklist:Books[];
book1:Books;

  constructor(private orderbook: OrderbookserviceService, private book:BookserviceService, private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>this.booktitle=params)
    this.getdata(this.booktitle);
  }

  orderBook: BooksOrder = {
    orderId:null, books: {
      bookid:null, title: '', subject: '', author: { authorId: null, firstName: '', lastName: '', email: '', contactno: null }, publishedYear: null, isbnCode: '', quantity: null, bookCost: null, shelfDetails: '',
      publisher: {
        publisherId:null,
        publisherName: '',
        contactno: '',
        email: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        pincode:null
      }
    },quantity:null, orderDate:null, orderStatus:'',
  };
  onSubmit(addOrderBook: BooksOrder): any {
    this.orderBook.books=this.book1;
    console.log(this.orderBook);
    this.orderbook.addOrderBook(this.orderBook).subscribe(data => {
      alert('ThankYou! your order has been placed')
      this.router.navigate(["/"]);
    },
    
    error=>{
      if(error.status == 406)
      alert("Entered Field already exist")
      if(error.status == 400)
      alert("Enter Some Fields")
    });
  }
  getdata(title:string){
    this.book.getBookByTitle(this.booktitle.title).subscribe(
      response => {console.log(response);this.handleSuccessfulResponse(response)}
    );
  }
  
  handleSuccessfulResponse(response) {
    this.booklist =JSON.parse(response) ;
    this.book1=this.booklist[0];
    // console.log(this.bookList);
    // console.log(JSON.parse(this.bookList), 'jason print')
  }
}
