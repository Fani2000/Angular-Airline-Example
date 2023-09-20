import { Component, OnInit } from '@angular/core';
import { FlightsService } from './../api/services/flights.service';
import { FlightRm } from '../api/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css'],
})
export class SearchFlightsComponent {
  searchResult: FlightRm[] = [];

  constructor(private flightService: FlightsService, private router: Router) {}

  search() {
    this.flightService
      .getFlights({})
      .subscribe(
        (r) => ((this.searchResult = r), (err: any) => this.handleError(err))
      );
  }

  private handleError = (err: any) => {
    console.log('ERR💣💣💣: ', err.statusText);

    if (err.status == 404) {
      alert('Flight Not Found!');
      this.router.navigate(['/search-flights']);
    }
  };

  ngOnInit(): void {}
}
