import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IssuedBooks } from '../variables/issuedbook';

@Injectable({
  providedIn: 'root'
})
export class IssuedbookserviceService {
  //addbook: Books;
  //user:DAOUser;
  token=null;
  headersasd = new HttpHeaders;

 constructor(private httpService: HttpClient) { }
 public getIssuedBooks(){
  console.log(" service issued books");
  return this.httpService.get<IssuedBooks>("http://localhost:8587/libraryManagement/booksIssued/ViewAllBooks");
}
public addIssueBook(issueBookDetail:IssuedBooks){
   
  console.log("i am in issue service" +issueBookDetail);
  const headers = new HttpHeaders({'Content-Type': 'application/json'});
  return this.httpService.post("http://localhost:8587/libraryManagement/booksIssued/LibraryBooksIssued", issueBookDetail,  { headers, responseType: 'text'});
}

}
