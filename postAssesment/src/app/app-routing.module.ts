import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/component/dashboard/dashboard.component';
import { LandingPageComponent } from './shared/component/landing-page/landing-page.component';
import { UserLandingComponent } from './user/component/user-landing/user-landing.component';
import { AuthguardGuard } from './authguard.guard';
const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'user',component:UserLandingComponent,canActivate:[AuthguardGuard]},
  {path:'admin',component:DashboardComponent,canActivate:[AuthguardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
