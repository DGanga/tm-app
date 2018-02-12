import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ShipmentLegsService } from './ShipmentLegs.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-ShipmentLegs',
	templateUrl: './ShipmentLegs.component.html',
	styleUrls: ['./ShipmentLegs.component.css'],
  providers: [ShipmentLegsService]
})
export class ShipmentLegsComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          shipmentLegId = new FormControl("", Validators.required);
        
  
      
          shipmentSequenceNumber = new FormControl("", Validators.required);
        
  
      
          shipFromLocation = new FormControl("", Validators.required);
        
  
      
          shipToLocation = new FormControl("", Validators.required);
        
  
      
          pickupArrivalDateTime = new FormControl("", Validators.required);
        
  
      
          pickupDepartureDateTime = new FormControl("", Validators.required);
        
  
      
          dropArrivalDateTime = new FormControl("", Validators.required);
        
  
      
          dropDepartureDateTime = new FormControl("", Validators.required);
        
  
      
          shipmentLegStatus = new FormControl("", Validators.required);
        
  
      
          load = new FormControl("", Validators.required);
        
  


  constructor(private serviceShipmentLegs:ShipmentLegsService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          shipmentLegId:this.shipmentLegId,
        
    
        
          shipmentSequenceNumber:this.shipmentSequenceNumber,
        
    
        
          shipFromLocation:this.shipFromLocation,
        
    
        
          shipToLocation:this.shipToLocation,
        
    
        
          pickupArrivalDateTime:this.pickupArrivalDateTime,
        
    
        
          pickupDepartureDateTime:this.pickupDepartureDateTime,
        
    
        
          dropArrivalDateTime:this.dropArrivalDateTime,
        
    
        
          dropDepartureDateTime:this.dropDepartureDateTime,
        
    
        
          shipmentLegStatus:this.shipmentLegStatus,
        
    
        
          load:this.load
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceShipmentLegs.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: "com.jda.shipment.visibility.ShipmentLegs",
      
        
          "shipmentLegId":this.shipmentLegId.value,
        
      
        
          "shipmentSequenceNumber":this.shipmentSequenceNumber.value,
        
      
        
          "shipFromLocation":this.shipFromLocation.value,
        
      
        
          "shipToLocation":this.shipToLocation.value,
        
      
        
          "pickupArrivalDateTime":this.pickupArrivalDateTime.value,
        
      
        
          "pickupDepartureDateTime":this.pickupDepartureDateTime.value,
        
      
        
          "dropArrivalDateTime":this.dropArrivalDateTime.value,
        
      
        
          "dropDepartureDateTime":this.dropDepartureDateTime.value,
        
      
        
          "shipmentLegStatus":this.shipmentLegStatus.value,
        
      
        
          "load":this.load.value
        
      
    };

    this.myForm.setValue({
      
        
          "shipmentLegId":null,
        
      
        
          "shipmentSequenceNumber":null,
        
      
        
          "shipFromLocation":null,
        
      
        
          "shipToLocation":null,
        
      
        
          "pickupArrivalDateTime":null,
        
      
        
          "pickupDepartureDateTime":null,
        
      
        
          "dropArrivalDateTime":null,
        
      
        
          "dropDepartureDateTime":null,
        
      
        
          "shipmentLegStatus":null,
        
      
        
          "load":null
        
      
    });

    return this.serviceShipmentLegs.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "shipmentLegId":null,
        
      
        
          "shipmentSequenceNumber":null,
        
      
        
          "shipFromLocation":null,
        
      
        
          "shipToLocation":null,
        
      
        
          "pickupArrivalDateTime":null,
        
      
        
          "pickupDepartureDateTime":null,
        
      
        
          "dropArrivalDateTime":null,
        
      
        
          "dropDepartureDateTime":null,
        
      
        
          "shipmentLegStatus":null,
        
      
        
          "load":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "com.jda.shipment.visibility.ShipmentLegs",
      
        
          
        
    
        
          
            "shipmentSequenceNumber":this.shipmentSequenceNumber.value,
          
        
    
        
          
            "shipFromLocation":this.shipFromLocation.value,
          
        
    
        
          
            "shipToLocation":this.shipToLocation.value,
          
        
    
        
          
            "pickupArrivalDateTime":this.pickupArrivalDateTime.value,
          
        
    
        
          
            "pickupDepartureDateTime":this.pickupDepartureDateTime.value,
          
        
    
        
          
            "dropArrivalDateTime":this.dropArrivalDateTime.value,
          
        
    
        
          
            "dropDepartureDateTime":this.dropDepartureDateTime.value,
          
        
    
        
          
            "shipmentLegStatus":this.shipmentLegStatus.value,
          
        
    
        
          
            "load":this.load.value
          
        
    
    };

    return this.serviceShipmentLegs.updateAsset(form.get("shipmentLegId").value,this.asset)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteAsset(): Promise<any> {

    return this.serviceShipmentLegs.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceShipmentLegs.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "shipmentLegId":null,
          
        
          
            "shipmentSequenceNumber":null,
          
        
          
            "shipFromLocation":null,
          
        
          
            "shipToLocation":null,
          
        
          
            "pickupArrivalDateTime":null,
          
        
          
            "pickupDepartureDateTime":null,
          
        
          
            "dropArrivalDateTime":null,
          
        
          
            "dropDepartureDateTime":null,
          
        
          
            "shipmentLegStatus":null,
          
        
          
            "load":null 
          
        
      };



      
        if(result.shipmentLegId){
          
            formObject.shipmentLegId = result.shipmentLegId;
          
        }else{
          formObject.shipmentLegId = null;
        }
      
        if(result.shipmentSequenceNumber){
          
            formObject.shipmentSequenceNumber = result.shipmentSequenceNumber;
          
        }else{
          formObject.shipmentSequenceNumber = null;
        }
      
        if(result.shipFromLocation){
          
            formObject.shipFromLocation = result.shipFromLocation;
          
        }else{
          formObject.shipFromLocation = null;
        }
      
        if(result.shipToLocation){
          
            formObject.shipToLocation = result.shipToLocation;
          
        }else{
          formObject.shipToLocation = null;
        }
      
        if(result.pickupArrivalDateTime){
          
            formObject.pickupArrivalDateTime = result.pickupArrivalDateTime;
          
        }else{
          formObject.pickupArrivalDateTime = null;
        }
      
        if(result.pickupDepartureDateTime){
          
            formObject.pickupDepartureDateTime = result.pickupDepartureDateTime;
          
        }else{
          formObject.pickupDepartureDateTime = null;
        }
      
        if(result.dropArrivalDateTime){
          
            formObject.dropArrivalDateTime = result.dropArrivalDateTime;
          
        }else{
          formObject.dropArrivalDateTime = null;
        }
      
        if(result.dropDepartureDateTime){
          
            formObject.dropDepartureDateTime = result.dropDepartureDateTime;
          
        }else{
          formObject.dropDepartureDateTime = null;
        }
      
        if(result.shipmentLegStatus){
          
            formObject.shipmentLegStatus = result.shipmentLegStatus;
          
        }else{
          formObject.shipmentLegStatus = null;
        }
      
        if(result.load){
          
            formObject.load = result.load;
          
        }else{
          formObject.load = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "shipmentLegId":null,
        
      
        
          "shipmentSequenceNumber":null,
        
      
        
          "shipFromLocation":null,
        
      
        
          "shipToLocation":null,
        
      
        
          "pickupArrivalDateTime":null,
        
      
        
          "pickupDepartureDateTime":null,
        
      
        
          "dropArrivalDateTime":null,
        
      
        
          "dropDepartureDateTime":null,
        
      
        
          "shipmentLegStatus":null,
        
      
        
          "load":null 
        
      
      });
  }

}
