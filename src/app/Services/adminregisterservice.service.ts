import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../variables/admin';
import { DAOUser } from '../variables/DaoUser';

@Injectable({
  providedIn: 'root'
})
export class AdminregisterserviceService {

  headersasd = new HttpHeaders;

  constructor(private httpService: HttpClient) { }
  public addAdmin(addAdmin: Admin) {
    console.log("ins service add");
    console.log(addAdmin);
    return this.httpService.post("http://localhost:8587/libraryManagement/addAdmin", addAdmin);
  }

}
