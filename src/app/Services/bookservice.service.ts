import { Injectable } from '@angular/core';
import{ HttpClient,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RouterLink } from '@angular/router';
import { Books } from '../variables/book';
import { DAOUser } from '../variables/DaoUser';
import { IssuedBooks } from '../variables/issuedbook';
@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  updatebook: Books;
   user:DAOUser;
   token=null;
   headersasd = new HttpHeaders;

  constructor(private httpService: HttpClient) { }
  authenticate(username:any, password:any) {
    return this.httpService
      .post<any>("http://localhost:8587/authenticate", { username, password })
      .pipe(
        map(userData => {
          console.log(userData.token)
          sessionStorage.setItem("username", username);
          sessionStorage.setItem("UserId",userData.id)
          let tokenStr = "Bearer " + userData.jwttoken;
          sessionStorage.setItem("token", tokenStr);
          sessionStorage.setItem("role",userData.role);
          console.log("token",sessionStorage.getItem("token"))
          return userData;
        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    
    //console.log(user);
    //console.log(!(user === null));
    return !(user === null);
  }
  isAdmin(){
    let role = sessionStorage.getItem("role");
    if(role==="ADMIN"){
      return true;
    }
    return false;
  }
  isUser(){
    let role = sessionStorage.getItem("role");
    if(role==="USER"){
      return true;
    }
    return false;
  }
  logOut() {
    sessionStorage.removeItem("username");
    sessionStorage.clear();
  }

  public getAllBooks() {
    console.log("ins service get books");//headers
    return this.httpService.get<Books>("http://localhost:8587/libraryManagement/GetBooks");
  }
  public addBook(addbook: Books) {
    console.log("ins service add");
    console.log(addbook);
    return this.httpService.post("http://localhost:8587/libraryManagement/AddBooks", addbook);
  }
  public update(updatebook: Books) {
    this.updatebook = updatebook;
  }
  public updateMethod() {
    return this.updatebook;
  }
  public onUpdate(updatebook: Books) {
    console.log("ins service update");
    return this.httpService.put("http://localhost:8587/libraryManagement/UpdateBook", updatebook);
  }
  delete(id: number) {
    console.log("ins service delete");
    return this.httpService.delete("http://localhost:8587/libraryManagement/DeleteBook/" + id);
  }
 public getBookByTitle(title:string){
  console.log("ins service title");
  return this.httpService.get("http://localhost:8587/libraryManagement/GetBookByTitle/" + title);
 }

}

