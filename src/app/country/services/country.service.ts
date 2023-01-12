import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private API_URL: string = 'https://restcountries.com/v3.1';
  private API_URL_V2: string = 'https://restcountries.com/v2';

  get httParams() {
    return new HttpParams().set(
      'fields',
      'name,capital,alpha2Code,flag,population'
    );
  }

  constructor(private http: HttpClient) {}

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.API_URL_V2}/name/${term}`;
    return this.http.get<Country[]>(url, { params: this.httParams });
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.API_URL_V2}/capital/${term}`;
    return this.http.get<Country[]>(url, { params: this.httParams });
  }

  getCountryAlpha(id: string): Observable<Country> {
    const url = `${this.API_URL_V2}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  searchRegion(id: string): Observable<Country[]> {
    const url = `${this.API_URL_V2}/regionalbloc/${id}`;
    return this.http.get<Country[]>(url, { params: this.httParams });
  }
}
