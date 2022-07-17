import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/component/admin-home/admin-home.component';
import { BookListComponent } from './admin/component/book-list/book-list.component';
import { DashboardComponent } from './admin/component/dashboard/dashboard.component';
import { IssuedBookListComponent } from './admin/component/issued-book-list/issued-book-list.component';
import { RequstedBookListComponent } from './admin/component/requsted-book-list/requsted-book-list.component';
import { UserListComponent } from './admin/component/user-list/user-list.component';
import { HomepageComponent } from './shared/component/homepage/homepage.component';
import { UserLandingPageComponent } from './user/component/user-landing-page/user-landing-page.component';
import { UserRequestedBookComponent } from './user/component/user-requested-book/user-requested-book.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'user', component: UserLandingPageComponent, children: [] },
  { path: 'userRequestedBook', component: UserRequestedBookComponent },
  { path: 'admin', component: AdminHomeComponent,children:[
    {path:'',component:DashboardComponent},
    {path:'totalbooks',component:BookListComponent},
    {path:'issuedbooks',component:IssuedBookListComponent},
    {path:'requestedbook',component:RequstedBookListComponent},
    {path:'userlist',component:UserListComponent}

  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
