import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  term: string = '';
  isError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(event: string) {
    this.isError = false;
    this.term = event;
    this.countryService.searchCountry(this.term).subscribe(
      (countries) => {
        console.log(countries);
        this.countries = countries;
      },
      (error) => {
        this.isError = true;
        this.countries = [];
        console.log(error);
      }
    );
  }

  suggestions(term: string) {
    this.isError = false;
    console.log('sugges', term);
  }
}
