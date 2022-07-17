import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angularMaterial/angular-material/angular-material.module';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { HomepageComponent } from './shared/component/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModalComponent } from './user/component/login-modal/login-modal.component';
import { SignupModalComponent } from './user/component/signup-modal/signup-modal.component';
import { UserLandingPageComponent } from './user/component/user-landing-page/user-landing-page.component';
import { DividerComponent } from './shared/component/divider/divider.component';
import { BookCardComponent } from './user/component/book-card/book-card.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrModule } from 'ngx-toastr';
import { UserInfoDropdownComponent } from './user/component/user-info-dropdown/user-info-dropdown.component';
import { UserRequestedBookComponent } from './user/component/user-requested-book/user-requested-book.component';
import { AdminHomeComponent } from './admin/component/admin-home/admin-home.component';
import { DashboardComponent } from './admin/component/dashboard/dashboard.component';
import { StatsBoardComponent } from './admin/component/stats-board/stats-board.component';
import { BookListComponent } from './admin/component/book-list/book-list.component';
import { IssuedBookListComponent } from './admin/component/issued-book-list/issued-book-list.component';
import { RequstedBookListComponent } from './admin/component/requsted-book-list/requsted-book-list.component';
import { UserListComponent } from './admin/component/user-list/user-list.component';
import { AddBookModalComponent } from './admin/component/add-book-modal/add-book-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    LoginModalComponent,
    SignupModalComponent,
    UserLandingPageComponent,
    DividerComponent,
    BookCardComponent,
    UserInfoDropdownComponent,
    UserRequestedBookComponent,
    AdminHomeComponent,
    DashboardComponent,
    StatsBoardComponent,
    BookListComponent,
    IssuedBookListComponent,
    RequstedBookListComponent,
    UserListComponent,
    AddBookModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,Ng2SearchPipeModule,ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
