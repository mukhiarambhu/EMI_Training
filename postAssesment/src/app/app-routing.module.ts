import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/component/dashboard/dashboard.component';
import { LandingPageComponent } from './shared/component/landing-page/landing-page.component';
import { UserLandingComponent } from './user/component/user-landing/user-landing.component';
import { AuthguardGuard } from './authguard.guard';
import { UserListComponent } from './admin/component/user-list/user-list.component';
import { BookListComponent } from './admin/component/book-list/book-list.component';
import { UserRequestedBookComponent } from './user/component/user-requested-book/user-requested-book.component';
import { RequestedBookListComponent } from './admin/component/requested-book-list/requested-book-list.component';
const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'user',component:UserLandingComponent,children:[
    
  ]},
  {path:'admin',component:DashboardComponent,children:[
    
  ]},
  {path:'userlist',component:UserListComponent},
  {path:'booklist',component:BookListComponent},
  {path:'userbooks',component:UserRequestedBookComponent},
  {path:'requestedbooks',component:RequestedBookListComponent}
  
];

// canActivate:[AuthguardGuard]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
