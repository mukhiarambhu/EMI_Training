import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AboutUsComponent } from './featuredModules/about-us/about-us.component'
import { ContactUsComponent } from './featuredModules/contact-us/contact-us.component'
import { HomeComponent } from './featuredModules/home/home.component'
import { OurServicesComponent } from './featuredModules/our-services/our-services.component'
import { CeoComponent } from './roles/ceo/ceo.component'
import { CountryManagerComponent } from './roles/country-manager/country-manager.component'
import { CtoComponent } from './roles/cto/cto.component'
import { ManagersComponent } from './roles/managers/managers.component'
import { SoftwareEngineersComponent } from './roles/software-engineers/software-engineers.component'
import { TeamleadComponent } from './roles/teamlead/teamlead.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'ourservices', component: OurServicesComponent },
  {
    path: 'ceo',
    component: CeoComponent,
    children: [
      {
        path: 'cto',
        component: CtoComponent,
        children: [
          {
            path: 'countrymanager',
            component: CountryManagerComponent,
            children: [
              {
                path: 'managers',
                component: ManagersComponent,
                children: [
                  {
                    path: 'teamlead',
                    component: TeamleadComponent,
                    children: [
                      {
                        path: 'softwareengineer',
                        component: SoftwareEngineersComponent
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
