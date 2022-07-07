import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angularMaterial/angular-material/angular-material.module';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { LandingPageComponent } from './shared/component/landing-page/landing-page.component';
import { LoginModalComponent } from './user/component/login-modal/login-modal.component';
import { SignupModalComponent } from './user/component/signup-modal/signup-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './admin/component/dashboard/dashboard.component';
import { UserLandingComponent } from './user/component/user-landing/user-landing.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    LoginModalComponent,
    SignupModalComponent,
    DashboardComponent,
    UserLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
