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
  {path:'user',component:UserLandingComponent, canActivate:[AuthguardGuard],children:[
    
  ]},
  {path:'admin',component:DashboardComponent, canActivate:[AuthguardGuard],children:[
    
  ]},
  {path:'userlist',component:UserListComponent, canActivate:[AuthguardGuard]},
  {path:'booklist',component:BookListComponent, canActivate:[AuthguardGuard]},
  {path:'userbooks',component:UserRequestedBookComponent, canActivate:[AuthguardGuard]},
  {path:'requestedbooks',component:RequestedBookListComponent, canActivate:[AuthguardGuard]}
  
];

// canActivate:[AuthguardGuard]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
