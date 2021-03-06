import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[MatToolbarModule,MatIconModule,MatButtonModule,MatDialogModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatTableModule,MatPaginatorModule]
})
export class AngularmaterialModule { }
