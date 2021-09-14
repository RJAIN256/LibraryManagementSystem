import { Pipe, PipeTransform } from '@angular/core';
import { Books } from './variables/book';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(book:Books[], searchvalue:string): Books[] {
    if(!book || !searchvalue){
      return book;
    }

  return book.filter(book1 => book1.title.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase()));
  }

}
