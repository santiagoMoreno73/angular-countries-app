import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class ByRegionComponent {
  regions: string[] = [
    'EU',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA',
    'SAARC',
  ];
  regionActive: string = '';
  countriesRegion: Country[] = [];

  constructor(private appService: CountryService) {}

  activatedRegion(cod_region: string) {
    if (this.regionActive == cod_region) {
      return;
    }

    this.regionActive = cod_region;
    this.countriesRegion = [];

    this.appService
      .searchRegion(cod_region)
      .subscribe((countries) => this.handleResult(countries));
  }

  getClassScss(region: string) {
    return region === this.regionActive
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  handleResult(countries: Country[]) {
    console.log('Region', countries);
    this.countriesRegion = countries;
  }
}
