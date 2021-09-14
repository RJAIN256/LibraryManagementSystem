import { Books } from "./book";
import { Users } from "./user";

export class IssuedBooks{
    issueId:number;
     user:Users;
     books:Books;
     issueDate:any;
         quantity: number;
         dueDate: any;
        
        
         constructor( issueId:number, user:Users, books:Books, issueDate:string, quantity:number,dueDate:string){
             this.issueId = issueId;
             this.user = user;
             this.books = books;
             this.issueDate=issueDate; 
             this.quantity = quantity;
             this.dueDate = dueDate;
 
         }
        }