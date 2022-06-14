import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './featuredModules/home/home.component';
import { ContactUsComponent } from './featuredModules/contact-us/contact-us.component';
import { AboutUsComponent } from './featuredModules/about-us/about-us.component';
import { OurServicesComponent } from './featuredModules/our-services/our-services.component';
import { CeoComponent } from './roles/ceo/ceo.component';
import { CtoComponent } from './roles/cto/cto.component';
import { CountryManagerComponent } from './roles/country-manager/country-manager.component';
import { ManagersComponent } from './roles/managers/managers.component';
import { TeamleadComponent } from './roles/teamlead/teamlead.component';
import { SoftwareEngineersComponent } from './roles/software-engineers/software-engineers.component';
import { DirectiveComponent } from './featuredModules/directive/directive.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    OurServicesComponent,
    CeoComponent,
    CtoComponent,
    CountryManagerComponent,
    ManagersComponent,
    TeamleadComponent,
    SoftwareEngineersComponent,
    DirectiveComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
