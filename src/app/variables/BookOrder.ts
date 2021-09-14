import { Books } from "./book";

export class BooksOrder{
    orderId:number;
    books:Books;
    quantity:number;
    orderDate:any;
    orderStatus:string;
    constructor(orderId:number,
      books:Books,
      quantity:number,
      orderDate:any,
      orderStatus:string){
        this.orderId=orderId;
        this.books=books;
        this.quantity=quantity;
        this.orderDate=orderDate;
        this.orderStatus=orderStatus;
      }
  
  }
      