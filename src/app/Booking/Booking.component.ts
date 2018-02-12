import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BookingService } from './Booking.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Booking',
	templateUrl: './Booking.component.html',
	styleUrls: ['./Booking.component.css'],
  providers: [BookingService]
})
export class BookingComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          bookingId = new FormControl("", Validators.required);
        
  
      
          shipFromLocation = new FormControl("", Validators.required);
        
  
      
          shipToLocation = new FormControl("", Validators.required);
        
  
      
          unitOfMeasure = new FormControl("", Validators.required);
        
  
      
          currencyCode = new FormControl("", Validators.required);
        
  
      
          chargeAmount = new FormControl("", Validators.required);
        
  
      
          status = new FormControl("", Validators.required);
        
  
      
          carrierCode = new FormControl("", Validators.required);
        
  
      
          serviceCode = new FormControl("", Validators.required);
        
  
      
          VesselArrivalDateTime = new FormControl("", Validators.required);
        
  
      
          VesselDepartureDateTime = new FormControl("", Validators.required);
        
  
      
          VesselName = new FormControl("", Validators.required);
        
  
      
          VoyageNumber = new FormControl("", Validators.required);
        
  
      
          loggingInfo = new FormControl("", Validators.required);
        
  
      
          loads = new FormControl("", Validators.required);
        
  


  constructor(private serviceBooking:BookingService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          bookingId:this.bookingId,
        
    
        
          shipFromLocation:this.shipFromLocation,
        
    
        
          shipToLocation:this.shipToLocation,
        
    
        
          unitOfMeasure:this.unitOfMeasure,
        
    
        
          currencyCode:this.currencyCode,
        
    
        
          chargeAmount:this.chargeAmount,
        
    
        
          status:this.status,
        
    
        
          carrierCode:this.carrierCode,
        
    
        
          serviceCode:this.serviceCode,
        
    
        
          VesselArrivalDateTime:this.VesselArrivalDateTime,
        
    
        
          VesselDepartureDateTime:this.VesselDepartureDateTime,
        
    
        
          VesselName:this.VesselName,
        
    
        
          VoyageNumber:this.VoyageNumber,
        
    
        
          loggingInfo:this.loggingInfo,
        
    
        
          loads:this.loads
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceBooking.getAll()
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
      $class: "com.jda.shipment.visibility.Booking",
      
        
          "bookingId":this.bookingId.value,
        
      
        
          "shipFromLocation":this.shipFromLocation.value,
        
      
        
          "shipToLocation":this.shipToLocation.value,
        
      
        
          "unitOfMeasure":this.unitOfMeasure.value,
        
      
        
          "currencyCode":this.currencyCode.value,
        
      
        
          "chargeAmount":this.chargeAmount.value,
        
      
        
          "status":this.status.value,
        
      
        
          "carrierCode":this.carrierCode.value,
        
      
        
          "serviceCode":this.serviceCode.value,
        
      
        
          "VesselArrivalDateTime":this.VesselArrivalDateTime.value,
        
      
        
          "VesselDepartureDateTime":this.VesselDepartureDateTime.value,
        
      
        
          "VesselName":this.VesselName.value,
        
      
        
          "VoyageNumber":this.VoyageNumber.value,
        
      
        
          "loggingInfo":this.loggingInfo.value,
        
      
        
          "loads":this.loads.value
        
      
    };

    this.myForm.setValue({
      
        
          "bookingId":null,
        
      
        
          "shipFromLocation":null,
        
      
        
          "shipToLocation":null,
        
      
        
          "unitOfMeasure":null,
        
      
        
          "currencyCode":null,
        
      
        
          "chargeAmount":null,
        
      
        
          "status":null,
        
      
        
          "carrierCode":null,
        
      
        
          "serviceCode":null,
        
      
        
          "VesselArrivalDateTime":null,
        
      
        
          "VesselDepartureDateTime":null,
        
      
        
          "VesselName":null,
        
      
        
          "VoyageNumber":null,
        
      
        
          "loggingInfo":null,
        
      
        
          "loads":null
        
      
    });

    return this.serviceBooking.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "bookingId":null,
        
      
        
          "shipFromLocation":null,
        
      
        
          "shipToLocation":null,
        
      
        
          "unitOfMeasure":null,
        
      
        
          "currencyCode":null,
        
      
        
          "chargeAmount":null,
        
      
        
          "status":null,
        
      
        
          "carrierCode":null,
        
      
        
          "serviceCode":null,
        
      
        
          "VesselArrivalDateTime":null,
        
      
        
          "VesselDepartureDateTime":null,
        
      
        
          "VesselName":null,
        
      
        
          "VoyageNumber":null,
        
      
        
          "loggingInfo":null,
        
      
        
          "loads":null 
        
      
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
      $class: "com.jda.shipment.visibility.Booking",
      
        
          
        
    
        
          
            "shipFromLocation":this.shipFromLocation.value,
          
        
    
        
          
            "shipToLocation":this.shipToLocation.value,
          
        
    
        
          
            "unitOfMeasure":this.unitOfMeasure.value,
          
        
    
        
          
            "currencyCode":this.currencyCode.value,
          
        
    
        
          
            "chargeAmount":this.chargeAmount.value,
          
        
    
        
          
            "status":this.status.value,
          
        
    
        
          
            "carrierCode":this.carrierCode.value,
          
        
    
        
          
            "serviceCode":this.serviceCode.value,
          
        
    
        
          
            "VesselArrivalDateTime":this.VesselArrivalDateTime.value,
          
        
    
        
          
            "VesselDepartureDateTime":this.VesselDepartureDateTime.value,
          
        
    
        
          
            "VesselName":this.VesselName.value,
          
        
    
        
          
            "VoyageNumber":this.VoyageNumber.value,
          
        
    
        
          
            "loggingInfo":this.loggingInfo.value,
          
        
    
        
          
            "loads":this.loads.value
          
        
    
    };

    return this.serviceBooking.updateAsset(form.get("bookingId").value,this.asset)
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

    return this.serviceBooking.deleteAsset(this.currentId)
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

    return this.serviceBooking.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "bookingId":null,
          
        
          
            "shipFromLocation":null,
          
        
          
            "shipToLocation":null,
          
        
          
            "unitOfMeasure":null,
          
        
          
            "currencyCode":null,
          
        
          
            "chargeAmount":null,
          
        
          
            "status":null,
          
        
          
            "carrierCode":null,
          
        
          
            "serviceCode":null,
          
        
          
            "VesselArrivalDateTime":null,
          
        
          
            "VesselDepartureDateTime":null,
          
        
          
            "VesselName":null,
          
        
          
            "VoyageNumber":null,
          
        
          
            "loggingInfo":null,
          
        
          
            "loads":null 
          
        
      };



      
        if(result.bookingId){
          
            formObject.bookingId = result.bookingId;
          
        }else{
          formObject.bookingId = null;
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
      
        if(result.chargeAmount){
          
            formObject.chargeAmount = result.chargeAmount;
          
        }else{
          formObject.chargeAmount = null;
        }
      
        if(result.status){
          
            formObject.status = result.status;
          
        }else{
          formObject.status = null;
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
      
        if(result.loads){
          
            formObject.loads = result.loads;
          
        }else{
          formObject.loads = null;
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
      
        
          "bookingId":null,
        
      
        
          "shipFromLocation":null,
        
      
        
          "shipToLocation":null,
        
      
        
          "unitOfMeasure":null,
        
      
        
          "currencyCode":null,
        
      
        
          "chargeAmount":null,
        
      
        
          "status":null,
        
      
        
          "carrierCode":null,
        
      
        
          "serviceCode":null,
        
      
        
          "VesselArrivalDateTime":null,
        
      
        
          "VesselDepartureDateTime":null,
        
      
        
          "VesselName":null,
        
      
        
          "VoyageNumber":null,
        
      
        
          "loggingInfo":null,
        
      
        
          "loads":null 
        
      
      });
  }

}
