import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../model/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
postApi: string;
getApi: string;

  constructor(private http: HttpClient) {
    this.postApi='http://localhost:1539/flight';
    this.getApi='http://localhost:1539/flight';
   }
   postFlight(flight: Flight):Observable<any>{
     return this.http.post(this.postApi, flight);
   }
   fetchFlights():Observable<Flight[]>{
     return this.http.get<Flight[]>(this.getApi);
   }
}
