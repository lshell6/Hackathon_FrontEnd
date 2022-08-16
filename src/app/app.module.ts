import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFlightComponent } from './components/add-flight/add-flight.component';
import { ListFlightsComponent } from './components/list-flights/list-flights.component';
import { SelectFlightComponent } from './components/select-flight/select-flight.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFlightComponent,
    SelectFlightComponent,
    ListFlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
