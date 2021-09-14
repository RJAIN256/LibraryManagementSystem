import { Users } from "./user";

export class SuggestedBooks{
    title:string;
    subject:string;
    author:string;
    publications:string;
    description:string;
    suggested_date:string;
    user:Users;
  
  constructor( title:string, subject:string,author:string,publications:string, description:string
   , suggested_date:string,user:Users)
  
    {
  this.title=title;
  this.subject=subject;
  this.author=author;
  this.publications = publications;
  this.description =description;
  this.suggested_date = suggested_date;
  this.user=user
  }
  }