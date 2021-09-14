import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookserviceService } from '../Services/bookservice.service';
import { DamagebookserviceService } from '../Services/damagebookservice.service';
import { Books } from '../variables/book';
import { DamageBook } from '../variables/damagebook';

@Component({
  selector: 'app-adddamagebook',
  templateUrl: './adddamagebook.component.html',
  styleUrls: ['./adddamagebook.component.css']
})
export class AdddamagebookComponent implements OnInit {

  message:String;
booktitle:any;
booklist:Books[];
book1:Books;
  constructor(private bookservice:DamagebookserviceService, private book:BookserviceService, private router: Router ,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>this.booktitle=params)
    this.getdata(this.booktitle);
  }

  damageBook: DamageBook = {id:null, book:{
    bookid: null, title: '', subject: '', author: { authorId: null, firstName: '', lastName: '', email: '', contactno: null }, publishedYear: null, isbnCode: '', quantity: null, bookCost: null, shelfDetails: '',
  publisher:{ publisherId:null,
    publisherName: '',
    contactno: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    pincode: null}},  quantity:null,
    description:''}; 

  onSubmit(addbook:DamageBook):any{
    this.damageBook.book=this.book1;
    console.log(this.damageBook);
     this.bookservice.addDamagedBook(this.damageBook).subscribe(data => {
      alert("added to damage")
      this.router.navigate(['/bookviewdata'])
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
