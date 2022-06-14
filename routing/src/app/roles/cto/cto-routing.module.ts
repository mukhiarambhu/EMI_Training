import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryManagerComponent } from '../country-manager/country-manager.component';

const routes: Routes=[
    {path:'',component:CountryManagerComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { } 