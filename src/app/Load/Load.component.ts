import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoadService } from './Load.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Load',
	templateUrl: './Load.component.html',
	styleUrls: ['./Load.component.css'],
  providers: [LoadService]
})
export class LoadComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          loadId = new FormControl("", Validators.required);
        
  
      
          shipFromLocation = new FormControl("", Validators.required);
        
  
      
          shipToLocation = new FormControl("", Validators.required);
        
  
      
          unitOfMeasure = new FormControl("", Validators.required);
        
  
      
          currencyCode = new FormControl("", Validators.required);
        
  
      
          loadChargeAmount = new FormControl("", Validators.required);
        
  
      
          loadDimInfo = new FormControl("", Validators.required);
        
  
      
          loadStatus = new FormControl("", Validators.required);
        
  
      
          VerifiedGrossMass = new FormControl("", Validators.required);
        
  
      
          VGMAuthorizer = new FormControl("", Validators.required);
        
  
      
          VGMWeighingMethod = new FormControl("", Validators.required);
        
  
      
          VGMWeighingDateTime = new FormControl("", Validators.required);
        
  
      
          VGMVerificationDateTime = new FormControl("", Validators.required);
        
  
      
          carrierCode = new FormControl("", Validators.required);
        
  
      
          serviceCode = new FormControl("", Validators.required);
        
  
      
          VesselArrivalDateTime = new FormControl("", Validators.required);
        
  
      
          VesselDepartureDateTime = new FormControl("", Validators.required);
        
  
      
          VesselName = new FormControl("", Validators.required);
        
  
      
          VoyageNumber = new FormControl("", Validators.required);
        
  
      
          loggingInfo = new FormControl("", Validators.required);
        
  
      
          ShipmentLegs = new FormControl("", Validators.required);
        
  


  constructor(private serviceLoad:LoadService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          loadId:this.loadId,
        
    
        
          shipFromLocation:this.shipFromLocation,
        
    
        
          shipToLocation:this.shipToLocation,
        
    
        
          unitOfMeasure:this.unitOfMeasure,
        
    
        
          currencyCode:this.currencyCode,
        
    
        
          loadChargeAmount:this.loadChargeAmount,
        
    
        
          loadDimInfo:this.loadDimInfo,
        
    
        
          loadStatus:this.loadStatus,
        
    
        
          VerifiedGrossMass:this.VerifiedGrossMass,
        
    
        
          VGMAuthorizer:this.VGMAuthorizer,
        
    
        
          VGMWeighingMethod:this.VGMWeighingMethod,
        
    
        
          VGMWeighingDateTime:this.VGMWeighingDateTime,
        
    
        
          VGMVerificationDateTime:this.VGMVerificationDateTime,
        
    
        
          carrierCode:this.carrierCode,
        
    
        
          serviceCode:this.serviceCode,
        
    
        
          VesselArrivalDateTime:this.VesselArrivalDateTime,
        
    
        
          VesselDepartureDateTime:this.VesselDepartureDateTime,
        
    
        
          VesselName:this.VesselName,
        
    
        
          VoyageNumber:this.VoyageNumber,
        
    
        
          loggingInfo:this.loggingInfo,
        
    
        
          ShipmentLegs:this.ShipmentLegs
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceLoad.getAll()
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
      $class: "com.jda.shipment.visibility.Load",
      
        
          "loadId":this.loadId.value,
        
      
        
          "shipFromLocation":this.shipFromLocation.value,
        
      
        
          "shipToLocation":this.shipToLocation.value,
        
      
        
          "unitOfMeasure":this.unitOfMeasure.value,
        
      
        
          "currencyCode":this.currencyCode.value,
        
      
        
          "loadChargeAmount":this.loadChargeAmount.value,
        
      
        
          "loadDimInfo":this.loadDimInfo.value,
        
      
        
          "loadStatus":this.loadStatus.value,
        
      
        
          "VerifiedGrossMass":this.VerifiedGrossMass.value,
        
      
        
          "VGMAuthorizer":this.VGMAuthorizer.value,
        
      
        
          "VGMWeighingMethod":this.VGMWeighingMethod.value,
        
      
        
          "VGMWeighingDateTime":this.VGMWeighingDateTime.value,
        
      
        
          "VGMVerificationDateTime":this.VGMVerificationDateTime.value,
        
      
        
          "carrierCode":this.carrierCode.value,
        
      
        
          "serviceCode":this.serviceCode.value,
        
      
        
          "VesselArrivalDateTime":this.VesselArrivalDateTime.value,
        
      
        
          "VesselDepartureDateTime":this.VesselDepartureDateTime.value,
        
      
        
          "VesselName":this.VesselName.value,
        
      
        
          "VoyageNumber":this.VoyageNumber.value,
        
      
        
          "loggingInfo":this.loggingInfo.value,
        
      
        
          "ShipmentLegs":this.ShipmentLegs.value
        
      
    };

    this.myForm.setValue({
      
        
          "loadId":null,
        
      
        
          "shipFromLocation":null,
        
      
        
          "shipToLocation":null,
        
      
        
          "unitOfMeasure":null,
        
      
        
          "currencyCode":null,
        
      
        
          "loadChargeAmount":null,
        
      
        
          "loadDimInfo":null,
        
      
        
          "loadStatus":null,
        
      
        
          "VerifiedGrossMass":null,
        
      
        
          "VGMAuthorizer":null,
        
      
        
          "VGMWeighingMethod":null,
        
      
        
          "VGMWeighingDateTime":null,
        
      
        
          "VGMVerificationDateTime":null,
        
      
        
          "carrierCode":null,
        
      
        
          "serviceCode":null,
        
      
        
          "VesselArrivalDateTime":null,
        
      
        
          "VesselDepartureDateTime":null,
        
      
        
          "VesselName":null,
        
      
        
          "VoyageNumber":null,
        
      
        
          "loggingInfo":null,
        
      
        
          "ShipmentLegs":null
        
      
    });

    return this.serviceLoad.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "loadId":null,
        
      
        
          "shipFromLocation":null,
        
      
        
          "shipToLocation":null,
        
      
        
          "unitOfMeasure":null,
        
      
        
          "currencyCode":null,
        
      
        
          "loadChargeAmount":null,
        
      
        
          "loadDimInfo":null,
        
      
        
          "loadStatus":null,
        
      
        
          "VerifiedGrossMass":null,
        
      
        
          "VGMAuthorizer":null,
        
      
        
          "VGMWeighingMethod":null,
        
      
        
          "VGMWeighingDateTime":null,
        
      
        
          "VGMVerificationDateTime":null,
        
      
        
          "carrierCode":null,
        
      
        
          "serviceCode":null,
        
      
        
          "VesselArrivalDateTime":null,
        
      
        
          "VesselDepartureDateTime":null,
        
      
        
          "VesselName":null,
        
      
        
          "VoyageNumber":null,
        
      
        
          "loggingInfo":null,
        
      
        
          "ShipmentLegs":null 
        
      
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
      $class: "com.jda.shipment.visibility.Load",
      
        
          
        
    
        
          
            "shipFromLocation":this.shipFromLocation.value,
          
        
    
        
          
            "shipToLocation":this.shipToLocation.value,
          
        
    
        
          
            "unitOfMeasure":this.unitOfMeasure.value,
          
        
    
        
          
            "currencyCode":this.currencyCode.value,
          
        
    
        
          
            "loadChargeAmount":this.loadChargeAmount.value,
          
        
    
        
          
            "loadDimInfo":this.loadDimInfo.value,
          
        
    
        
          
            "loadStatus":this.loadStatus.value,
          
        
    
        
          
            "VerifiedGrossMass":this.VerifiedGrossMass.value,
          
        
    
        
          
            "VGMAuthorizer":this.VGMAuthorizer.value,
          
        
    
        
          
            "VGMWeighingMethod":this.VGMWeighingMethod.value,
          
        
    
        
          
            "VGMWeighingDateTime":this.VGMWeighingDateTime.value,
          
        
    
        
          
            "VGMVerificationDateTime":this.VGMVerificationDateTime.value,
          
        
    
        
          
            "carrierCode":this.carrierCode.value,
          
        
    
        
          
            "serviceCode":this.serviceCode.value,
          
        
    
        
          
            "VesselArrivalDateTime":this.VesselArrivalDateTime.value,
          
        
    
        
          
            "VesselDepartureDateTime":this.VesselDepartureDateTime.value,
          
        
    
        
          
            "VesselName":this.VesselName.value,
          
        
    
        
          
            "VoyageNumber":this.VoyageNumber.value,
          
        
    
        
          
            "loggingInfo":this.loggingInfo.value,
          
        
    
        
          
            "ShipmentLegs":this.ShipmentLegs.value
          
        
    
    };

    return this.serviceLoad.updateAsset(form.get("loadId").value,this.asset)
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

    return this.serviceLoad.deleteAsset(this.currentId)
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

    return this.serviceLoad.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "loadId":null,
          
        
          
            "shipFromLocation":null,
          
        
          
            "shipToLocation":null,
          
        
          
            "unitOfMeasure":null,
          
        
          
            "currencyCode":null,
          
        
          
            "loadChargeAmount":null,
          
        
          
            "loadDimInfo":null,
          
        
          
            "loadStatus":null,
          
        
          
            "VerifiedGrossMass":null,
          
        
          
            "VGMAuthorizer":null,
          
        
          
            "VGMWeighingMethod":null,
          
        
          
            "VGMWeighingDateTime":null,
          
        
          
            "VGMVerificationDateTime":null,
          
        
          
            "carrierCode":null,
          
        
          
            "serviceCode":null,
          
        
          
            "VesselArrivalDateTime":null,
          
        
          
            "VesselDepartureDateTime":null,
          
        
          
            "VesselName":null,
          
        
          
            "VoyageNumber":null,
          
        
          
            "loggingInfo":null,
          
        
          
            "ShipmentLegs":null 
          
        
      };



      
        if(result.loadId){
          
            formObject.loadId = result.loadId;
          
        }else{
          formObject.loadId = null;
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
      
        if(result.unitOfMeasure){
          
            formObject.unitOfMeasure = result.unitOfMeasure;
          
        }else{
          formObject.unitOfMeasure = null;
        }
      
        if(result.currencyCode){
          
            formObject.currencyCode = result.currencyCode;
          
        }else{
          formObject.currencyCode = null;
        }
      
        if(result.loadChargeAmount){
          
            formObject.loadChargeAmount = result.loadChargeAmount;
          
        }else{
          formObject.loadChargeAmount = null;
        }
      
        if(result.loadDimInfo){
          
            formObject.loadDimInfo = result.loadDimInfo;
          
        }else{
          formObject.loadDimInfo = null;
        }
      
        if(result.loadStatus){
          
            formObject.loadStatus = result.loadStatus;
          
        }else{
          formObject.loadStatus = null;
        }
      
        if(result.VerifiedGrossMass){
          
            formObject.VerifiedGrossMass = result.VerifiedGrossMass;
          
        }else{
          formObject.VerifiedGrossMass = null;
        }
      
        if(result.VGMAuthorizer){
          
            formObject.VGMAuthorizer = result.VGMAuthorizer;
          
        }else{
          formObject.VGMAuthorizer = null;
        }
      
        if(result.VGMWeighingMethod){
          
            formObject.VGMWeighingMethod = result.VGMWeighingMethod;
          
        }else{
          formObject.VGMWeighingMethod = null;
        }
      
        if(result.VGMWeighingDateTime){
          
            formObject.VGMWeighingDateTime = result.VGMWeighingDateTime;
          
        }else{
          formObject.VGMWeighingDateTime = null;
        }
      
        if(result.VGMVerificationDateTime){
          
            formObject.VGMVerificationDateTime = result.VGMVerificationDateTime;
          
        }else{
          formObject.VGMVerificationDateTime = null;
        }
      
        if(result.carrierCode){
          
            formObject.carrierCode = result.carrierCode;
          
        }else{
          formObject.carrierCode = null;
        }
      
        if(result.serviceCode){
          
            formObject.serviceCode = result.serviceCode;
          
        }else{
          formObject.serviceCode = null;
        }
      
        if(result.VesselArrivalDateTime){
          
            formObject.VesselArrivalDateTime = result.VesselArrivalDateTime;
          
        }else{
          formObject.VesselArrivalDateTime = null;
        }
      
        if(result.VesselDepartureDateTime){
          
            formObject.VesselDepartureDateTime = result.VesselDepartureDateTime;
          
        }else{
          formObject.VesselDepartureDateTime = null;
        }
      
        if(result.VesselName){
          
            formObject.VesselName = result.VesselName;
          
        }else{
          formObject.VesselName = null;
        }
      
        if(result.VoyageNumber){
          
            formObject.VoyageNumber = result.VoyageNumber;
          
        }else{
          formObject.VoyageNumber = null;
        }
      
        if(result.loggingInfo){
          
            formObject.loggingInfo = result.loggingInfo;
          
        }else{
          formObject.loggingInfo = null;
        }
      
        if(result.ShipmentLegs){
          
            formObject.ShipmentLegs = result.ShipmentLegs;
          
        }else{
          formObject.ShipmentLegs = null;
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
      
        
          "loadId":null,
        
      
        
          "shipFromLocation":null,
        
      
        
          "shipToLocation":null,
        
      
        
          "unitOfMeasure":null,
        
      
        
          "currencyCode":null,
        
      
        
          "loadChargeAmount":null,
        
      
        
          "loadDimInfo":null,
        
      
        
          "loadStatus":null,
        
      
        
          "VerifiedGrossMass":null,
        
      
        
          "VGMAuthorizer":null,
        
      
        
          "VGMWeighingMethod":null,
        
      
        
          "VGMWeighingDateTime":null,
        
      
        
          "VGMVerificationDateTime":null,
        
      
        
          "carrierCode":null,
        
      
        
          "serviceCode":null,
        
      
        
          "VesselArrivalDateTime":null,
        
      
        
          "VesselDepartureDateTime":null,
        
      
        
          "VesselName":null,
        
      
        
          "VoyageNumber":null,
        
      
        
          "loggingInfo":null,
        
      
        
          "ShipmentLegs":null 
        
      
      });
  }

}
