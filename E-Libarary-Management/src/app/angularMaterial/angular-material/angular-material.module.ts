import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports:[MatToolbarModule,MatIconModule,MatCardModule,MatInputModule,MatButtonModule,MatSelectModule,MatDialogModule,MatMenuModule,MatDividerModule,MatListModule]
})
export class AngularMaterialModule {}
