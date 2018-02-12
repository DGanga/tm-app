import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Configuration }     from './configuration';
import { DataService }     from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { TransactionComponent } from './Transaction/Transaction.component'

import { ShipmentDetailsComponent } from './ShipmentDetails/ShipmentDetails.component';
import { ShipmentLegsComponent } from './ShipmentLegs/ShipmentLegs.component';
import { ShipmentComponent } from './Shipment/Shipment.component';
import { LoadComponent } from './Load/Load.component';
import { BookingComponent } from './Booking/Booking.component';

@NgModule({
  declarations: [
    AppComponent,
		HomeComponent,
    // TransactionComponent,
    ShipmentDetailsComponent,
		ShipmentLegsComponent,
		ShipmentComponent,
		LoadComponent,
		
    BookingComponent
		
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    Configuration,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
