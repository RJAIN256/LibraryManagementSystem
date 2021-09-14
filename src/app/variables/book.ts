import { Author } from "./author";
import { Publisher } from "./Publisher";


export class Books {
    bookid:number;
    title:string;
    subject:string;
    publishedYear:number;
    isbnCode:string;
    quantity:number;
    bookCost:number;
    shelfDetails:string;
    author:Author;
    publisher:Publisher;
  
    constructor(id:number,
      title:string,
      subject:string,
      publishedYear:number,
      isbnCode:string,
      quantity:number,
      bookCost:number,
      shelfDetails:string,
      author:Author, publisher:Publisher){
        this.title=title;
        this.subject=subject;
        this.publishedYear=publishedYear;
        this.isbnCode=isbnCode;
        this.quantity=quantity;
        this.bookCost=bookCost;
        this.shelfDetails=shelfDetails;
        this.author=author;
        this.publisher=publisher;
  
    }
  }