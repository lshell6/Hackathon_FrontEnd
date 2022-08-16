import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Flight } from 'src/app/model/flight.model';
import { Vendor } from 'src/app/model/vendor.model';
import { FlightService } from 'src/app/service/flight.service';

@Component({
  selector: 'app-select-flight',
  templateUrl: './select-flight.component.html',
  styleUrls: ['./select-flight.component.css']
})
export class SelectFlightComponent implements OnInit {
 vendor: Vendor;
 flight: Flight;
 numAdults: number;
 numChildren: number;
 totalFare: number;
  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.totalFare=this.numAdults*this.flight.adult_fare + this.numChildren*this.flight.child_fare;
  }

}
