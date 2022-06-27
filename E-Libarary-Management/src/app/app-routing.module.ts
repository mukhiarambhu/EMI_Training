import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupComponent } from './signup/signup.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'login',component:SignupComponent},
  {path:'dashboard',component:UserPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
