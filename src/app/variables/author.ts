export class Author{
    authorId:number;
    firstName:string;
    lastName:string;
    email:string;
    contactno:number;
    constructor(authorId:number,
      firstName:string,
      lastName:string,
      email:string,
      contactno:number,){
        this.authorId=authorId,
        this.firstName=firstName,
        this.lastName=lastName,
        this.email=email,
        this.contactno=contactno
      }
  }