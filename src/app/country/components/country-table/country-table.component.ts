import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styles: [],
})
export class ConuntryTableComponent {
  @Input() countriesResp: Country[] = [];

  constructor() {}
}
