import { Component, OnInit } from '@angular/core';
import { FlightsService } from './../api/services/flights.service';
import { FlightRm } from '../api/models';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css'],
})
export class SearchFlightsComponent {
  searchResult: FlightRm[] = [];

  constructor(private flightService: FlightsService) {}

  search() {
    this.flightService
      .getFlights({})
      .subscribe((r) => ((this.searchResult = r), this.handleError));
  }

  private handleError(err: any) {
    console.log('ERROR', err);
  }

  ngOnInit(): void {}
}
