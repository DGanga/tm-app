import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { ShipmentDetails } from '../com.jda.shipment.visibility';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class ShipmentDetailsService {

	
		private NAMESPACE: string = 'ShipmentDetails';
	



    constructor(private dataService: DataService<ShipmentDetails>) {
    };

    public getAll(): Observable<ShipmentDetails[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<ShipmentDetails> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<ShipmentDetails> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<ShipmentDetails> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<ShipmentDetails> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
