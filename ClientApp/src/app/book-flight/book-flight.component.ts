import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightsService } from '../api/services';
import { FlightRm } from '../api/models';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css'],
})
export class BookFlightComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private flightService: FlightsService
  ) {}

  flightId: string = 'not loaded';
  flight: FlightRm = {};

  ngOnInit(): void {
    console.log('Book Flight');
    this.route.paramMap.subscribe((p) => this.findFlight(p.get('flightId')));
  }

  private findFlight = (flightId: string | null) => {
    this.flightId = flightId ?? 'Not passed.';

    this.flightService
      .findFlights({ id: this.flightId })
      .subscribe(
        (f) => ((this.flight = f), (err: any) => this.handleError(err))
      );
  };

  private handleError = (err: any) => {
    console.log('ERROR Flight Not Found!', err.statusText);

    if (err.status == 404) {
      alert('Flight Not Found!');
      this.router.navigate(['/search-flights']);
    }
  };
}
