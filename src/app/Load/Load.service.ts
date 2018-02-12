import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Load } from '../com.jda.shipment.visibility';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class LoadService {

	
		private NAMESPACE: string = 'Load';
	



    constructor(private dataService: DataService<Load>) {
    };

    public getAll(): Observable<Load[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Load> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Load> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Load> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Load> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
