import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [],
})
export class ByCapitalComponent implements OnInit {
  term: string = '';
  isError: boolean = false;
  countries: Country[] = [];

  constructor(private appService: CountryService) {}

  ngOnInit(): void {}

  search(event: string) {
    this.isError = false;
    this.term = event;
    this.appService.searchCapital(this.term).subscribe(
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
  }
}
