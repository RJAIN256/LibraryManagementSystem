import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from '../Services/bookservice.service';
import { IssuedbookserviceService } from '../Services/issuedbookservice.service';
import { Books } from '../variables/book';
import { IssuedBooks } from '../variables/issuedbook';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {
  searchvalue:string;
  book:Books;
  bookList :Books[] ;

  constructor(private bookService:BookserviceService, private router:Router) { }
  
  ngOnInit(): any {
    this.bookService.getAllBooks().subscribe(
      response => {console.log(response);this.handleSuccessfulResponse(response)}
    );
  }

  handleSuccessfulResponse(response) {
    this.bookList =JSON.parse(response) ;
    // console.log(this.bookList);
    // console.log(JSON.parse(this.bookList), 'jason print')
  }
  onSubmit(b:Books){
    this.book=b;
  }
   
   issue(addissue:Books){
    this.router.navigate(['/addissuedbook'],{ queryParams: { title:addissue.title } });;
    
  }

}
