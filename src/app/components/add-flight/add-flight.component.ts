import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightService } from 'src/app/service/flight.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {
addForm: FormGroup;
departure_date: string;
arrival_date: string;
  constructor(private flightService: FlightService, private router: Router) { }

  ngOnInit(): void {
    this.addForm=new FormGroup({
      destination: new FormControl('', [Validators.required,
        Validators.pattern(/^[a-zA-Z ]+$/)]),
      source: new FormControl('', [Validators.required,
        Validators.pattern(/^[a-zA-Z ]+$/)]),
      adult_fare:new FormControl('', [Validators.required,
        Validators.pattern(/^[0-9]+$/)]),
        child_fare: new FormControl('', [Validators.required,
          Validators.pattern(/^[0-9]+$/)]),
       departure_time:new FormControl('', [Validators.required,
        Validators.pattern(/^[a-zA-Z ]+$/)]),
        arrival_time: new FormControl('', [Validators.required,
          Validators.pattern(/^[a-zA-Z ]+$/)]),
          duration: new FormControl('', [Validators.required,
            Validators.pattern(/^[a-zA-Z ]+$/)]),
          seat: new FormControl('', [Validators.required,
            Validators.pattern(/^[0-9]+$/)])
    });
  }

  onSubmit(): void{
    console.log(this.addForm.value);
    this.router.navigateByUrl("/flights");
  }

}
