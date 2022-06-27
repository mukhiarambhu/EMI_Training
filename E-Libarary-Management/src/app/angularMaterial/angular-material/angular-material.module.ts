import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports:[MatToolbarModule,MatIconModule,MatCardModule,MatInputModule,MatButtonModule,MatSelectModule]
})
export class AngularMaterialModule {}
