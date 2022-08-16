import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { Flight } from 'src/app/model/flight.model';

@Component({
  selector: 'app-list-flights',
  templateUrl: './list-flights.component.html',
  styleUrls: ['./list-flights.component.css']
})
export class ListFlightsComponent implements OnInit {
@Input("data")
flights: Flight[];

@Output()
selectFlightEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(fid: number){
    this.selectFlightEmitter.emit(fid);
  }

}
