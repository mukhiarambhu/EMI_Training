import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AngularMaterialModule } from './angularMaterial/angular-material/angular-material.module';
import { SignupComponent } from './signup/signup.component';
import { UserPageComponent } from './user-page/user-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DropdownUserComponent } from './shared/dropdown-user/dropdown-user.component';
import { DividerComponent } from './shared/divider/divider.component';
import { CardComponentComponent } from './shared/card-component/card-component.component';
import { SirninComponent } from './sirnin/sirnin.component';

import { AdminModule } from '../app/admin/admin.module';
import { InputComponent } from './shared/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    UserPageComponent,
    HomePageComponent,
    DropdownUserComponent,
    DividerComponent,
    CardComponentComponent,
    SirninComponent,
    InputComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AdminModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [NavbarComponent],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
