import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IssuedBooksComponent } from './issued-books/issued-books.component';
import { RequestedBookComponent } from './requested-book/requested-book.component';
import { SettingComponent } from './setting/setting.component';
import { TotalBooksComponent } from './total-books/total-books.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'admin',component:AdminHomeComponent,children :[
    {path:'dashboard',component:DashboardComponent},
    {path:'totalbooks',component:TotalBooksComponent},
    {path:'issuedbooks',component:IssuedBooksComponent},
    {path:'requestedbook',component:RequestedBookComponent},
    {path:'userlist',component:UserListComponent},
    {path:'setting',component:SettingComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
