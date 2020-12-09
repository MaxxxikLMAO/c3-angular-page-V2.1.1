import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {UserCreateComponent} from "./user-create/user-create.component";
import {UsersComponent} from "./users/users.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'user.create', component: UserCreateComponent},
  {path: 'users', component: UsersComponent},
  {path: 'user/:id', component: UserDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
