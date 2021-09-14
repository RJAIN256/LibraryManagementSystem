import { Books } from "./book";

export class DamageBook{
      id:number;
	  book:Books;
      quantity:number;
	 description:string;
       constructor(id:number,
            book:Books,
          quantity:number,
           description:string,){
            this.id=id;
            this.book=book;
            this.quantity=quantity;
            this.description=description;
           }
}