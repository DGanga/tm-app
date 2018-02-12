import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ShipmentService } from './Shipment.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Shipment',
	templateUrl: './Shipment.component.html',
	styleUrls: ['./Shipment.component.css'],
  providers: [ShipmentService]
})
export class ShipmentComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          shipmentId = new FormControl("", Validators.required);
        
  
      
          freightTerms = new FormControl("", Validators.required);
        
  
      
          shipFromLocation = new FormControl("", Validators.required);
        
  
      
          shipToLocation = new FormControl("", Validators.required);
        
  
      
          pickupFromDateTime = new FormControl("", Validators.required);
        
  
      
          pickupToDateTime = new FormControl("", Validators.required);
        
  
      
          deliveryFromDateTime = new FormControl("", Validators.required);
        
  
      
          deliveryToDateTime = new FormControl("", Validators.required);
        
  
      
          commodityCode = new FormControl("", Validators.required);
        
  
      
          unitOfMeasure = new FormControl("", Validators.required);
        
  
      
          shipmentContainerInfo = new FormControl("", Validators.required);
        
  
      
          shipmentDetails = new FormControl("", Validators.required);
        
  
      
          loggingInfo = new FormControl("", Validators.required);
        
  
      
          shipmentLegs = new FormControl("", Validators.required);
        
  


  constructor(private serviceShipment:ShipmentService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          shipmentId:this.shipmentId,
        
    
        
          freightTerms:this.freightTerms,
        
    
        
          shipFromLocation:this.shipFromLocation,
        
    
        
          shipToLocation:this.shipToLocation,
        
    
        
          pickupFromDateTime:this.pickupFromDateTime,
        
    
        
          pickupToDateTime:this.pickupToDateTime,
        
    
        
          deliveryFromDateTime:this.deliveryFromDateTime,
        
    
        
          deliveryToDateTime:this.deliveryToDateTime,
        
    
        
          commodityCode:this.commodityCode,
        
    
        
          unitOfMeasure:this.unitOfMeasure,
        
    
        
          shipmentContainerInfo:this.shipmentContainerInfo,
        
    
        
          shipmentDetails:this.shipmentDetails,
        
    
        
          loggingInfo:this.loggingInfo,
        
    
        
          shipmentLegs:this.shipmentLegs
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceShipment.getAll()
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
      $class: "com.jda.shipment.visibility.Shipment",
      
        
          "shipmentId":this.shipmentId.value,
        
      
        
          "freightTerms":this.freightTerms.value,
        
      
        
          "shipFromLocation":this.shipFromLocation.value,
        
      
        
          "shipToLocation":this.shipToLocation.value,
        
      
        
          "pickupFromDateTime":this.pickupFromDateTime.value,
        
      
        
          "pickupToDateTime":this.pickupToDateTime.value,
        
      
        
          "deliveryFromDateTime":this.deliveryFromDateTime.value,
        
      
        
          "deliveryToDateTime":this.deliveryToDateTime.value,
        
      
        
          "commodityCode":this.commodityCode.value,
        
      
        
          "unitOfMeasure":this.unitOfMeasure.value,
        
      
        
          "shipmentContainerInfo":this.shipmentContainerInfo.value,
        
      
        
          "shipmentDetails":this.shipmentDetails.value,
        
      
        
          "loggingInfo":this.loggingInfo.value,
        
      
        
          "shipmentLegs":this.shipmentLegs.value
        
      
    };

    this.myForm.setValue({
      
        
          "shipmentId":null,
        
      
        
          "freightTerms":null,
        
      
        
          "shipFromLocation":null,
        
      
        
          "shipToLocation":null,
        
      
        
          "pickupFromDateTime":null,
        
      
        
          "pickupToDateTime":null,
        
      
        
          "deliveryFromDateTime":null,
        
      
        
          "deliveryToDateTime":null,
        
      
        
          "commodityCode":null,
        
      
        
          "unitOfMeasure":null,
        
      
        
          "shipmentContainerInfo":null,
        
      
        
          "shipmentDetails":null,
        
      
        
          "loggingInfo":null,
        
      
        
          "shipmentLegs":null
        
      
    });

    return this.serviceShipment.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "shipmentId":null,
        
      
        
          "freightTerms":null,
        
      
        
          "shipFromLocation":null,
        
      
        
          "shipToLocation":null,
        
      
        
          "pickupFromDateTime":null,
        
      
        
          "pickupToDateTime":null,
        
      
        
          "deliveryFromDateTime":null,
        
      
        
          "deliveryToDateTime":null,
        
      
        
          "commodityCode":null,
        
      
        
          "unitOfMeasure":null,
        
      
        
          "shipmentContainerInfo":null,
        
      
        
          "shipmentDetails":null,
        
      
        
          "loggingInfo":null,
        
      
        
          "shipmentLegs":null 
        
      
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
      $class: "com.jda.shipment.visibility.Shipment",
      
        
          
        
    
        
          
            "freightTerms":this.freightTerms.value,
          
        
    
        
          
            "shipFromLocation":this.shipFromLocation.value,
          
        
    
        
          
            "shipToLocation":this.shipToLocation.value,
          
        
    
        
          
            "pickupFromDateTime":this.pickupFromDateTime.value,
          
        
    
        
          
            "pickupToDateTime":this.pickupToDateTime.value,
          
        
    
        
          
            "deliveryFromDateTime":this.deliveryFromDateTime.value,
          
        
    
        
          
            "deliveryToDateTime":this.deliveryToDateTime.value,
          
        
    
        
          
            "commodityCode":this.commodityCode.value,
          
        
    
        
          
            "unitOfMeasure":this.unitOfMeasure.value,
          
        
    
        
          
            "shipmentContainerInfo":this.shipmentContainerInfo.value,
          
        
    
        
          
            "shipmentDetails":this.shipmentDetails.value,
          
        
    
        
          
            "loggingInfo":this.loggingInfo.value,
          
        
    
        
          
            "shipmentLegs":this.shipmentLegs.value
          
        
    
    };

    return this.serviceShipment.updateAsset(form.get("shipmentId").value,this.asset)
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

    return this.serviceShipment.deleteAsset(this.currentId)
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

    return this.serviceShipment.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "shipmentId":null,
          
        
          
            "freightTerms":null,
          
        
          
            "shipFromLocation":null,
          
        
          
            "shipToLocation":null,
          
        
          
            "pickupFromDateTime":null,
          
        
          
            "pickupToDateTime":null,
          
        
          
            "deliveryFromDateTime":null,
          
        
          
            "deliveryToDateTime":null,
          
        
          
            "commodityCode":null,
          
        
          
            "unitOfMeasure":null,
          
        
          
            "shipmentContainerInfo":null,
          
        
          
            "shipmentDetails":null,
          
        
          
            "loggingInfo":null,
          
        
          
            "shipmentLegs":null 
          
        
      };



      
        if(result.shipmentId){
          
            formObject.shipmentId = result.shipmentId;
          
        }else{
          formObject.shipmentId = null;
        }
      
        if(result.freightTerms){
          
            formObject.freightTerms = result.freightTerms;
          
        }else{
          formObject.freightTerms = null;
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
      
        if(result.pickupFromDateTime){
          
            formObject.pickupFromDateTime = result.pickupFromDateTime;
          
        }else{
          formObject.pickupFromDateTime = null;
        }
      
        if(result.pickupToDateTime){
          
            formObject.pickupToDateTime = result.pickupToDateTime;
          
        }else{
          formObject.pickupToDateTime = null;
        }
      
        if(result.deliveryFromDateTime){
          
            formObject.deliveryFromDateTime = result.deliveryFromDateTime;
          
        }else{
          formObject.deliveryFromDateTime = null;
        }
      
        if(result.deliveryToDateTime){
          
            formObject.deliveryToDateTime = result.deliveryToDateTime;
          
        }else{
          formObject.deliveryToDateTime = null;
        }
      
        if(result.commodityCode){
          
            formObject.commodityCode = result.commodityCode;
          
        }else{
          formObject.commodityCode = null;
        }
      
        if(result.unitOfMeasure){
          
            formObject.unitOfMeasure = result.unitOfMeasure;
          
        }else{
          formObject.unitOfMeasure = null;
        }
      
        if(result.shipmentContainerInfo){
          
            formObject.shipmentContainerInfo = result.shipmentContainerInfo;
          
        }else{
          formObject.shipmentContainerInfo = null;
        }
      
        if(result.shipmentDetails){
          
            formObject.shipmentDetails = result.shipmentDetails;
          
        }else{
          formObject.shipmentDetails = null;
        }
      
        if(result.loggingInfo){
          
            formObject.loggingInfo = result.loggingInfo;
          
        }else{
          formObject.loggingInfo = null;
        }
      
        if(result.shipmentLegs){
          
            formObject.shipmentLegs = result.shipmentLegs;
          
        }else{
          formObject.shipmentLegs = null;
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
      
        
          "shipmentId":null,
        
      
        
          "freightTerms":null,
        
      
        
          "shipFromLocation":null,
        
      
        
          "shipToLocation":null,
        
      
        
          "pickupFromDateTime":null,
        
      
        
          "pickupToDateTime":null,
        
      
        
          "deliveryFromDateTime":null,
        
      
        
          "deliveryToDateTime":null,
        
      
        
          "commodityCode":null,
        
      
        
          "unitOfMeasure":null,
        
      
        
          "shipmentContainerInfo":null,
        
      
        
          "shipmentDetails":null,
        
      
        
          "loggingInfo":null,
        
      
        
          "shipmentLegs":null 
        
      
      });
  }

}
