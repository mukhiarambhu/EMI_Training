import { NgModule,ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularmaterialModule } from './AngularMaterial/angularmaterial/angularmaterial.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ModalboxComponent } from './modalbox/modalbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TablelistComponent } from './tablelist/tablelist.component';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ModalboxComponent,
    TablelistComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularmaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
