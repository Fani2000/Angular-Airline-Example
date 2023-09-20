/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { findFlights } from '../fn/flights/find-flights';
import { FindFlights$Params } from '../fn/flights/find-flights';
import { findFlights$Plain } from '../fn/flights/find-flights-plain';
import { FindFlights$Plain$Params } from '../fn/flights/find-flights-plain';
import { FlightRm } from '../models/flight-rm';
import { getFlights } from '../fn/flights/get-flights';
import { GetFlights$Params } from '../fn/flights/get-flights';
import { getFlights$Plain } from '../fn/flights/get-flights-plain';
import { GetFlights$Plain$Params } from '../fn/flights/get-flights-plain';

@Injectable({ providedIn: 'root' })
export class FlightsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getFlights()` */
  static readonly GetFlightsPath = '/Flights';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFlights$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFlights$Plain$Response(params?: GetFlights$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FlightRm>>> {
    return getFlights$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFlights$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFlights$Plain(params?: GetFlights$Plain$Params, context?: HttpContext): Observable<Array<FlightRm>> {
    return this.getFlights$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FlightRm>>): Array<FlightRm> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFlights()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFlights$Response(params?: GetFlights$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FlightRm>>> {
    return getFlights(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFlights$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFlights(params?: GetFlights$Params, context?: HttpContext): Observable<Array<FlightRm>> {
    return this.getFlights$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FlightRm>>): Array<FlightRm> => r.body)
    );
  }

  /** Path part for operation `findFlights()` */
  static readonly FindFlightsPath = '/Flights/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findFlights$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  findFlights$Plain$Response(params: FindFlights$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<FlightRm>> {
    return findFlights$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findFlights$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findFlights$Plain(params: FindFlights$Plain$Params, context?: HttpContext): Observable<FlightRm> {
    return this.findFlights$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<FlightRm>): FlightRm => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findFlights()` instead.
   *
   * This method doesn't expect any request body.
   */
  findFlights$Response(params: FindFlights$Params, context?: HttpContext): Observable<StrictHttpResponse<FlightRm>> {
    return findFlights(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findFlights$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findFlights(params: FindFlights$Params, context?: HttpContext): Observable<FlightRm> {
    return this.findFlights$Response(params, context).pipe(
      map((r: StrictHttpResponse<FlightRm>): FlightRm => r.body)
    );
  }

}
