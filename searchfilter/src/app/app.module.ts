import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RatingPipe } from './rating.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RatingPipe
    
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
