import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AddbookComponent } from './addbook/addbook.component';
import {FormsModule} from '@angular/forms';
import {AuthinterceptorService} from './authinterceptor.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BooklistComponent } from './booklist/booklist.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { ViewissuedbookComponent } from './viewissuedbook/viewissuedbook.component';
import { VieworderbookComponent } from './vieworderbook/vieworderbook.component';
import { UpdateorderbookComponent } from './updateorderbook/updateorderbook.component';
// import { AdddamagebookComponent } from './addbook/adddamagebook/adddamagebook.component';
import { ViewdamagebookComponent } from './viewdamagebook/viewdamagebook.component';
import { OrderbookComponent } from './addorderbook/orderbook.component';
import { UpdatedamagebookComponent } from './updatedamagebook/updatedamagebook.component';
import { AddreturnbookComponent } from './addreturnbook/addreturnbook.component';
import { UpdatereturnedbookComponent } from './updatereturnedbook/updatereturnedbook.component';
import { ViewreturnedbookComponent } from './viewreturnedbook/viewreturnedbook.component';
import { HomefooterComponent } from './homefooter/homefooter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { RegisteradminComponent } from './registeradmin/registeradmin.component';
import { AddissuebookComponent } from './addissuebook/addissuebook.component';
import { SearchpipePipe } from './searchpipe.pipe';
import { PaymentComponent } from './payment/payment.component';
import { ViewallusersComponent } from './viewallusers/viewallusers.component';
import { AdddamagebookComponent } from './adddamagebook/adddamagebook.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    AddbookComponent,
    LoginComponent,
    LogoutComponent,
    HomepageComponent,
    BooklistComponent,
    UpdatebookComponent,
    ViewissuedbookComponent,
    VieworderbookComponent,
    UpdateorderbookComponent,
    AdddamagebookComponent,
    ViewdamagebookComponent,
    OrderbookComponent,
    UpdatedamagebookComponent,
    AddreturnbookComponent,
    UpdatereturnedbookComponent,
    ViewreturnedbookComponent,
    HomefooterComponent,
    NavbarComponent,
    UserregisterComponent,
    UserprofileComponent,
    UpdateuserComponent,
    ViewbookComponent,
    RegisteradminComponent,
    AddissuebookComponent,
    SearchpipePipe,
    PaymentComponent,
    ViewallusersComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthinterceptorService, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule { }
