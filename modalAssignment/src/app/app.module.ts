import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularmaterialModule } from './AngularMaterial/angularmaterial/angularmaterial.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ModalboxComponent } from './modalbox/modalbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, NavbarComponent, ModalboxComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularmaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
