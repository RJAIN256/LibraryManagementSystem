import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DamagebookserviceService } from '../Services/damagebookservice.service';
import { DamageBook } from '../variables/damagebook';

@Component({
  selector: 'app-viewdamagebook',
  templateUrl: './viewdamagebook.component.html',
  styleUrls: ['./viewdamagebook.component.css']
})
export class ViewdamagebookComponent implements OnInit {

  constructor(private bookService:DamagebookserviceService, private router:Router) { }
  bookList :DamageBook[] ;

  book : DamageBook;

  ngOnInit(): any {
    this.bookService.getAllDamagedBooks().subscribe(
      response => {console.log(response);this.handleSuccessfulResponse(response)}
    );
  }

  handleSuccessfulResponse(response) {
    this.bookList =JSON.parse(response) ;
    // console.log(this.bookList);
    // console.log(JSON.parse(this.bookList), 'jason print')
  }
  update(book: DamageBook) {
    this.bookService.update(book);
    this.router.navigate(['/updatedamagebook']); //updating the employee
  }


onSubmit(b:DamageBook){
  this.book = b;
}

}
