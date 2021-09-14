import { Injectable } from '@angular/core';
import{ HttpClient,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BooksOrder } from '../variables/BookOrder';

@Injectable({
  providedIn: 'root'
})
export class OrderbookserviceService {
  updateBookOrder: BooksOrder;
  headersasd = new HttpHeaders;
  constructor(private httpService: HttpClient) { }

  public getAllOrderBooks() {
    console.log("ins service get books");//headers
    return this.httpService.get<BooksOrder>("http://localhost:8587/libraryManagement/bookOrder/ViewAllOrderdBooks");
  }
  public addOrderBook(addOrderbook: BooksOrder) {
    console.log("ins service add");
    console.log(addOrderbook);
    return this.httpService.post("http://localhost:8587/libraryManagement/bookOrder/LibraryBooksOrdered", addOrderbook);
  }
  public update(updateBookOrder: BooksOrder) {
    this.updateBookOrder = updateBookOrder;
  }
  public updateMethod() {
    return this.updateBookOrder;
  }
  public onUpdate(updateBookOrder:BooksOrder ) {
    console.log("ins service update");
    return this.httpService.put("http://localhost:8587/libraryManagement/bookOrder/UpdateOrderedBooks", updateBookOrder);
  }
  delete(id: number) {
    console.log("ins service delete");
    return this.httpService.delete("http://localhost:8587/libraryManagement/bookOrder/CancelOrderedBooks/" + id);
  }

}



