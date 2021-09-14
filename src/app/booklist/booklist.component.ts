import { Component, OnInit } from '@angular/core';
import {BookserviceService} from '../Services/bookservice.service';
import {Router} from '@angular/router';
import { Books } from '../variables/book';
//import { title } from 'process';
//import { Book } from '../variables/book';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
book: Books;
searchvalue:string;
error=null;
bookList : Books[];
  constructor(private bookService:BookserviceService, private router:Router) { }
  //bookList :any=[] ;
  ngOnInit(): any {
    this.bookService.getAllBooks().subscribe(
      response => this.handleSuccessfulResponse(response) ,
      error=>{this.error=error.message}
    );
  }

  handleSuccessfulResponse(response) {
    this.bookList =JSON.parse(response) ;
    // console.log(this.bookList);
    // console.log(JSON.parse(this.bookList), 'jason print')
  }
  update(book: Books) {
    this.bookService.update(book);
    this.router.navigate(['/updatebook']); //updating the employee
  }
  delete(deletebook: Books): any {
   var selction= confirm("Are you sure !!")
   if(selction==true){
    this.bookList.splice(this.bookList.indexOf(deletebook), 1);
    this.bookService.delete(deletebook.bookid).subscribe(data => {
      alert(data);
    });}
    this.router.navigate(['/bookviewdata']);
  }
  damage(adddamage:Books){
    this.router.navigate(['/adddamagebook'],{ queryParams: { title:adddamage.title } });
  }
  order(addorder:Books){
    this.router.navigate(['/addorderbook'],{ queryParams: { title:addorder.title } });
  }
  onSubmit(b:Books){
    this.book = b;
  }
  query(){

  }
}


