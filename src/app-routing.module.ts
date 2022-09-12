import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ByCapitalComponent } from './app/country/pages/by-capital/by-capital.component';
import { ByCountryComponent } from './app/country/pages/by-country/by-country.component';
import { ByRegionComponent } from './app/country/pages/by-region/by-region.component';
import { SeeCountryComponent } from './app/country/pages/see-country/see-country.component';

const routes: Routes = [
  {
    path: '',
    component: ByCountryComponent,
    pathMatch: 'full',
  },
  {
    path: 'region',
    component: ByRegionComponent,
    pathMatch: 'full',
  },
  {
    path: 'capital',
    component: ByCapitalComponent,
    pathMatch: 'full',
  },
  {
    path: 'country/:id_country',
    component: SeeCountryComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class NameModule {}
