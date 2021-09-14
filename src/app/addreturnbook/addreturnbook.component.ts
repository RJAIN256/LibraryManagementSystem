import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookreturnedserviceService } from '../Services/bookreturnedservice.service';
import { BookserviceService } from '../Services/bookservice.service';
import { Books } from '../variables/book';
import { BooksReturned } from '../variables/returnbook';

@Component({
  selector: 'app-addreturnbook',
  templateUrl: './addreturnbook.component.html',
  styleUrls: ['./addreturnbook.component.css']
})
export class AddreturnbookComponent implements OnInit {
  booklist:Books;
  book1:Books;
 
  constructor(private bookservice:BookreturnedserviceService, private book:BookserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  returnedBook: BooksReturned = { id:null,
    books:{bookid: null, title: '', subject: '', author: { authorId: null, firstName: '', lastName: '', email: '', contactno: null }, publishedYear: null, isbnCode: '', quantity: null, bookCost: null, shelfDetails: '',
  publisher:{ publisherId:null,
    publisherName: '',
    contactno: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    pincode: null}},returnedDate:null,
    delayedDays:null,
    penalty:null,
    penaltyStatus:null}; 

  onSubmit(addbook:BooksReturned):any{
    this.returnedBook.books=this.book1;
    console.log(this.returnedBook);
     this.bookservice.addBook(this.returnedBook).subscribe(data => {
      alert('added to return book')
    },
    error=>{
      if(error.status == 406)
      alert("Entered Field already exist")
      if(error.status == 400)
      alert("Enter Some Fields")
    });
  }
 get(title:string){
this.book.getBookByTitle(title).subscribe(
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
