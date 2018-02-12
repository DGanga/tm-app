import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Booking } from '../com.jda.shipment.visibility';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class BookingService {

	
		private NAMESPACE: string = 'Booking';
	



    constructor(private dataService: DataService<Booking>) {
    };

    public getAll(): Observable<Booking[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Booking> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Booking> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Booking> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Booking> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
