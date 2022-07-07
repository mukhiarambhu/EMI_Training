import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AngularMaterialModule } from '../angularMaterial/angular-material/angular-material.module';
import { StatsBoardComponent } from './stats-board/stats-board.component';
import { TotalBooksComponent } from './total-books/total-books.component';
import { IssuedBooksComponent } from './issued-books/issued-books.component';
import { RequestedBookComponent } from './requested-book/requested-book.component';
import { UserListComponent } from './user-list/user-list.component';
import { SettingComponent } from './setting/setting.component';
import { AddBookModalBoxComponent } from './add-book-modal-box/add-book-modal-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [AdminHomeComponent, StatsBoardComponent, TotalBooksComponent, IssuedBooksComponent, RequestedBookComponent, UserListComponent, SettingComponent, AddBookModalBoxComponent, DashboardComponent],
  imports: [CommonModule, AdminRoutingModule,AngularMaterialModule,FormsModule, ReactiveFormsModule,HttpClientModule],
  exports: [AdminHomeComponent, AdminRoutingModule],
})
export class AdminModule {}
