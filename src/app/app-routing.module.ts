import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddbookComponent} from './addbook/addbook.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {AuthguardGuard} from './authguard.guard';
import {HomepageComponent} from './homepage/homepage.component'
import {BooklistComponent} from './booklist/booklist.component'
import {ViewissuedbookComponent} from './viewissuedbook/viewissuedbook.component'
import {UpdatebookComponent} from './updatebook/updatebook.component'
import { ViewdamagebookComponent } from './viewdamagebook/viewdamagebook.component';
import {OrderbookComponent} from './addorderbook/orderbook.component'
import { UpdateorderbookComponent } from './updateorderbook/updateorderbook.component';
import { VieworderbookComponent } from './vieworderbook/vieworderbook.component';
import { ViewreturnedbookComponent } from './viewreturnedbook/viewreturnedbook.component';
import { AddreturnbookComponent } from './addreturnbook/addreturnbook.component';
import { UpdatereturnedbookComponent } from './updatereturnedbook/updatereturnedbook.component';
import { UpdatedamagebookComponent } from './updatedamagebook/updatedamagebook.component';
import { RegisteradminComponent } from './registeradmin/registeradmin.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { AddissuebookComponent } from './addissuebook/addissuebook.component';
import { PaymentComponent } from './payment/payment.component';
import { ViewallusersComponent } from './viewallusers/viewallusers.component';
import { AdddamagebookComponent } from './adddamagebook/adddamagebook.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
{path : 'bookviewdata', component: BooklistComponent},
  { path: 'addbook', component: AddbookComponent, canActivate:[AuthguardGuard]},
{ path: 'homepage', component: HomepageComponent },
{ path: 'updatebook', component: UpdatebookComponent,canActivate:[AuthguardGuard] },
{ path: '', component: HomepageComponent },
//{ path: 'contact', component: ContactUSComponent },
//{ path: 'aboutus', component: GalleryComponent },
{ path: 'login', component: LoginComponent },
{ path: 'logout', component: LogoutComponent },
{ path: 'addissuedbook', component: AddissuebookComponent,canActivate:[AuthguardGuard] },
{ path: 'viewissuedbook', component: ViewissuedbookComponent,canActivate:[AuthguardGuard] },
{ path: 'adddamagebook', component: AdddamagebookComponent,canActivate:[AuthguardGuard] },
{ path: 'viewdamagebook', component: ViewdamagebookComponent,canActivate:[AuthguardGuard]},
{ path: 'updatedamagebook' ,component: UpdatedamagebookComponent,canActivate:[AuthguardGuard]},
{ path: 'addorderbook', component: OrderbookComponent,canActivate:[AuthguardGuard]},
{ path: 'updateorderbook', component: UpdateorderbookComponent,canActivate:[AuthguardGuard]},
{ path: 'vieworderbook', component: VieworderbookComponent,canActivate:[AuthguardGuard]},
{ path: 'viewreturnbook', component: ViewreturnedbookComponent,canActivate:[AuthguardGuard]},
{ path: 'addreturnbook', component: AddreturnbookComponent,canActivate:[AuthguardGuard]},
{ path: 'updatereturnbook', component: UpdatereturnedbookComponent,canActivate:[AuthguardGuard]},
{path:'adminregister',component: RegisteradminComponent},
{path:'viewbookbyuser',component: ViewbookComponent,canActivate:[AuthguardGuard]},
{path:'userregister',component: UserregisterComponent},
{path:'userprofile',component: UserprofileComponent,canActivate:[AuthguardGuard]},
{path:'updateuser',component:UpdateuserComponent,canActivate:[AuthguardGuard]},
{path:'payment',component:PaymentComponent,canActivate:[AuthguardGuard]},
{path:'viewalluser',component:ViewallusersComponent,canActivate:[AuthguardGuard]},
{path:'**',component:PagenotfoundComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
