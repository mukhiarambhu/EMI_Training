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
import { BookCardComponent } from './user/component/book-card/book-card.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserInfoDropdownComponent } from './user/component/user-info-dropdown/user-info-dropdown.component';
import { AddBookComponent } from './admin/component/add-book/add-book.component';
import { UserListComponent } from './admin/component/user-list/user-list.component';
import { RequestedBookListComponent } from './admin/component/requested-book-list/requested-book-list.component';
import { BookListComponent } from './admin/component/book-list/book-list.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    LoginModalComponent,
    SignupModalComponent,
    DashboardComponent,
    UserLandingComponent,
    BookCardComponent,
    UserInfoDropdownComponent,
    AddBookComponent,
    UserListComponent,
    RequestedBookListComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
