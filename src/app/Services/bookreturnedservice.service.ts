import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BooksReturned } from '../variables/returnbook';

@Injectable({
  providedIn: 'root'
})
export class BookreturnedserviceService {
  updatebook: BooksReturned;
 
  token=null;
  headersasd = new HttpHeaders;

  constructor(private httpService: HttpClient) { }
  public getAllBooks() {
    console.log("ins service get books");//headers
    return this.httpService.get<BooksReturned>("http://localhost:8587/libraryManagement/ViewReturnedBooksList");
  }
  public addBook(addbook: BooksReturned) {
    console.log("ins service add");
    console.log(addbook);
    return this.httpService.post("http://localhost:8587/libraryManagement/ReturnedBooks", addbook);
  }
  public update(updatebook: BooksReturned) {
    this.updatebook = updatebook;
  }
  public updateMethod() {
    return this.updatebook;
  }
  public onUpdate(updatebook: BooksReturned) {
    console.log("ins service update");
    return this.httpService.put("http://localhost:8587/libraryManagement/UpdateBookReturned", updatebook);
  }

}
