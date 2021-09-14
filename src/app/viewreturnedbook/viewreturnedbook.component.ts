import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookreturnedserviceService } from '../Services/bookreturnedservice.service';
import { BooksReturned } from '../variables/returnbook';

@Component({
  selector: 'app-viewreturnedbook',
  templateUrl: './viewreturnedbook.component.html',
  styleUrls: ['./viewreturnedbook.component.css']
})
export class ViewreturnedbookComponent implements OnInit {
  book: BooksReturned;
  constructor(private bookService:BookreturnedserviceService, private router:Router) { }
  returnedBookList :BooksReturned[] ;
  ngOnInit(): any {
    this.bookService.getAllBooks().subscribe(
      response => {console.log(response);this.handleSuccessfulResponse(response)}
    );
  }

  handleSuccessfulResponse(response) {
    this.returnedBookList =JSON.parse(response) ;
    // console.log(this.bookList);
    // console.log(JSON.parse(this.bookList), 'jason print')
  }
  update(book: BooksReturned) {
    this.bookService.update(book);
    this.router.navigate(['/updatereturnbook']); //updating the employee
  }
  onSubmit(b:BooksReturned){
    this.book = b;
  }
}
