import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';
@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [],
})
export class SeeCountryComponent implements OnInit {
  country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private serviceCountry: CountryService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id_country }) =>
          this.serviceCountry.getCountryAlpha(id_country)
        ),
        tap(console.log)
      )
      .subscribe((country) => {
        this.country = country;
      });

    // this.activatedRoute.params.subscribe(({ id_country }) => {
    //   this.serviceCountry.getCountryAlpha(id_country).subscribe((country) => {
    //     this.country = country;
    //     console.log("here", this.country);
    //   });
    // });
  }
}
