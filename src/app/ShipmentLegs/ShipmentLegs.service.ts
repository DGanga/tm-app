import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { ShipmentLegs } from '../com.jda.shipment.visibility';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class ShipmentLegsService {

	
		private NAMESPACE: string = 'ShipmentLegs';
	



    constructor(private dataService: DataService<ShipmentLegs>) {
    };

    public getAll(): Observable<ShipmentLegs[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<ShipmentLegs> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<ShipmentLegs> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<ShipmentLegs> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<ShipmentLegs> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
