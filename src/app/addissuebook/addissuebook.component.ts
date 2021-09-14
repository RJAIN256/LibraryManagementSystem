import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookserviceService } from '../Services/bookservice.service';
import { IssuedbookserviceService } from '../Services/issuedbookservice.service';
import { UserserviceService } from '../Services/userservice.service';
import { Books } from '../variables/book';
import { IssuedBooks } from '../variables/issuedbook';
import { Role } from '../variables/Role';
import { Users } from '../variables/user';

@Component({
  selector: 'app-addissuebook',
  templateUrl: './addissuebook.component.html',
  styleUrls: ['./addissuebook.component.css']
})
export class AddissuebookComponent implements OnInit {
  booktitle:any;
  booklist:Books[];
  book1:Books;
  user:Users;
  userlist:Users;
  constructor(private bookservice:IssuedbookserviceService, private book:BookserviceService, private userService:UserserviceService, private router: Router ,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>this.booktitle=params)
    this.getdata(this.booktitle);
  }
  issueBook: IssuedBooks = {issueId:null,user: {userid:null,firstName:'', lastName:'', mobileno:'', email:'', subscriptionDate:'',subscriptionStatus:'', subExpireDate:'', userAddress:{city:'', pincode:null, address1:'', address2:'', state:''},
  user:{id:null,
   username:'',
   password:'',
   role:Role.USER}},books:{
    bookid: null, title: '', subject: '', author: { authorId: null, firstName: '', lastName: '', email: '', contactno: null }, publishedYear: null, isbnCode: '', quantity: null, bookCost: null, shelfDetails: '',
  publisher:{ publisherId:null,
    publisherName: '',
    contactno: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    pincode: null}},  issueDate:null,
    quantity: null,
    dueDate: null,
    }; 

  onSubmit(addbook:IssuedBooks):any{
    console.log(this.issueBook);
    this.issueBook.books=this.book1;
     this.bookservice.addIssueBook(this.issueBook).subscribe(data => {
      alert('book issued')
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
getUser(){
  this.userService.getUserId().subscribe(
    response => {console.log(response);this.handleSuccessfulRes(response)}
  );
}

handleSuccessfulRes(response) {
  this.userlist =JSON.parse(response) ;
  this.user=this.userlist[0];
  // console.log(this.bookList);
  // console.log(JSON.parse(this.bookList), 'jason print')


}

}
