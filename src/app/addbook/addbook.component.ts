import { Component, OnInit } from '@angular/core';
import {BookserviceService} from '../Services/bookservice.service';
import { Router } from '@angular/router';
import { Books } from '../variables/book';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  message:String;

  constructor(private bookservice:BookserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  book: Books = {
    bookid: null, title: '', subject: '', author: { authorId: null, firstName: '', lastName: '', email: '', contactno: null }, publishedYear: null, isbnCode: '', quantity: null, bookCost: null, shelfDetails: '',
  publisher:{ publisherId:null,
    publisherName: '',
    contactno: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    pincode: null}}; 

  onSubmit(addbook:Books):any{
    console.log(this.book);
     this.bookservice.addBook(this.book).subscribe(data => {
      alert('book add successfully')
      // this.router.navigate(['/homepage']);
    },
    error=>{
      if(error.status == 406)
      alert("Entered Field already exist")
      if(error.status == 400)
      alert("Enter Some Fields")
    });
  }
}
