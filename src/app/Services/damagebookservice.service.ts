import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Books } from '../variables/book';
import { BooksOrder } from '../variables/BookOrder';
import { DamageBook } from '../variables/damagebook';

@Injectable({
  providedIn: 'root'
})
export class DamagebookserviceService {

  updateDamageBook: DamageBook;
  header = new HttpHeaders;
  constructor(private httpService: HttpClient) { }

  public getAllDamagedBooks() {
    console.log("ins service get books");//headers
    return this.httpService.get<DamageBook>("http://localhost:8587/damagedbooks/viewDamagedBooks");
  }
  public addDamagedBook(addbook: DamageBook) {
    console.log("ins service add");
    console.log(addbook);
    return this.httpService.post("http://localhost:8587/damagedbooks/addDamagedBooks", addbook);
  }
  public update(updatebook: DamageBook) {
    this.updateDamageBook = updatebook;
  }
  public updateMethod() {
    return this.updateDamageBook;
  }
  public onUpdate(updatebook: DamageBook) {
    console.log("ins service update");
    return this.httpService.put("http://localhost:8587/damagedbooks/updateDamagedBooks", updatebook);
  }
  delete(id: number) {
    console.log("ins service delete");
    return this.httpService.delete("" + id);
  }

}

