import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {BookserviceService} from './Services/bookservice.service';
import { DAOUser } from './variables/DaoUser';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  user:DAOUser=new DAOUser();
  constructor(private bookService:BookserviceService, private router:Router){}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (this.bookService.isUserLoggedIn())
    return true;

  this.router.navigate(['login']);
  return false;

  }
  
  
}
