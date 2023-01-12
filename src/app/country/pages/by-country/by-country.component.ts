import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class ByCountryComponent {
  term: string = '';
  viewSuggestion: boolean = false;
  isError: boolean = false;
  countries: Country[] = [];
  countriesSugges: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(event: string) {
    this.isError = false;
    this.term = event;
    this.countryService.searchCountry(this.term).subscribe(
      (countries) => {
        this.countries = countries;
      },
      (error) => {
        this.isError = true;
        this.countries = [];
      }
    );
  }

  suggestions(term: string) {
    this.isError = false;
    this.term = term;
    this.viewSuggestion = true;

    this.countryService.searchCountry(term).subscribe(
      (countries) => (this.countriesSugges = countries.splice(0, 3)),
      (err) => (this.countriesSugges = [])
    );

    console.log('suggess', this.countriesSugges);
  }

  searchSuggestion(term: string) {
    this.search(term);
  }
}
