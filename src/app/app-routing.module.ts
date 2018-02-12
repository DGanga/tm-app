import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import { HomeComponent } from './home/home.component';

import { ShipmentDetailsComponent } from './ShipmentDetails/ShipmentDetails.component';
import { ShipmentLegsComponent } from './ShipmentLegs/ShipmentLegs.component';
import { ShipmentComponent } from './Shipment/Shipment.component';
import { LoadComponent } from './Load/Load.component';
import { BookingComponent } from './Booking/Booking.component';

const routes: Routes = [
    // { path: 'transaction', component: TransactionComponent },
    {path: '', component: HomeComponent},
		
		{ path: 'ShipmentDetails', component: ShipmentDetailsComponent},
		
		{ path: 'ShipmentLegs', component: ShipmentLegsComponent},
		
		{ path: 'Shipment', component: ShipmentComponent},
		
		{ path: 'Load', component: LoadComponent},
		
		{ path: 'Booking', component: BookingComponent},
		
		{path: '**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
