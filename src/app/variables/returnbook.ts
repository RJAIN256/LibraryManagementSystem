import { Books } from "./book";

export class BooksReturned{
     id:number;
	// users;
    books:Books;
	returnedDate:any;
	delayedDays:number;
	penalty:number;
	penaltyStatus:number;
    constructor( id:number,
        // users;
        books:Books,
        returnedDate:any,
        delayedDays:number,
        penalty:number,
        penaltyStatus:number){
            this.id=id;
            // users;
            this.books=books;
            this.returnedDate=returnedDate;
            this.delayedDays=delayedDays;
            this.penalty=penalty;
            this.penaltyStatus=penaltyStatus;
        
    }
}