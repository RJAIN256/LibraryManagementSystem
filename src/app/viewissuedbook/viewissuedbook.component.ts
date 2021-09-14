import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { Books } from '../bookservice.service';
import { IssuedbookserviceService } from '../Services/issuedbookservice.service';
import { Books } from '../variables/book';
import { IssuedBooks } from '../variables/issuedbook';

@Component({
  selector: 'app-viewissuedbook',
  templateUrl: './viewissuedbook.component.html',
  styleUrls: ['./viewissuedbook.component.css']
})
export class ViewissuedbookComponent implements OnInit {
  book:IssuedBooks;

  constructor(private bookService:IssuedbookserviceService, private router:Router) { }
  issueBookList : IssuedBooks[];
  ngOnInit(): any {
    this.bookService.getIssuedBooks().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.issueBookList = JSON.parse(response);
    console.log(this.issueBookList);
  }
  onSubmit(b:IssuedBooks){
    this.book = b;
  }

}
