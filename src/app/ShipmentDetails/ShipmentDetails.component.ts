import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ShipmentDetailsService } from './ShipmentDetails.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-ShipmentDetails',
	templateUrl: './ShipmentDetails.component.html',
	styleUrls: ['./ShipmentDetails.component.css'],
  providers: [ShipmentDetailsService]
})
export class ShipmentDetailsComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          shipmentDetailsId = new FormControl("", Validators.required);
        
  
      
          itemNumber = new FormControl("", Validators.required);
        
  
      
          itemPackageLevelIDCode = new FormControl("", Validators.required);
        
  
      
          itemGroupCode = new FormControl("", Validators.required);
        
  
      
          itemType = new FormControl("", Validators.required);
        
  
      
          originCountryCode = new FormControl("", Validators.required);
        
  
      
          quantity = new FormControl("", Validators.required);
        
  
      
          numberOfUnits = new FormControl("", Validators.required);
        
  
      
          length = new FormControl("", Validators.required);
        
  
      
          width = new FormControl("", Validators.required);
        
  
      
          height = new FormControl("", Validators.required);
        
  
      
          shipmentContainerInfo = new FormControl("", Validators.required);
        
  


  constructor(private serviceShipmentDetails:ShipmentDetailsService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          shipmentDetailsId:this.shipmentDetailsId,
        
    
        
          itemNumber:this.itemNumber,
        
    
        
          itemPackageLevelIDCode:this.itemPackageLevelIDCode,
        
    
        
          itemGroupCode:this.itemGroupCode,
        
    
        
          itemType:this.itemType,
        
    
        
          originCountryCode:this.originCountryCode,
        
    
        
          quantity:this.quantity,
        
    
        
          numberOfUnits:this.numberOfUnits,
        
    
        
          length:this.length,
        
    
        
          width:this.width,
        
    
        
          height:this.height,
        
    
        
          shipmentContainerInfo:this.shipmentContainerInfo
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceShipmentDetails.getAll()
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
      $class: "com.jda.shipment.visibility.ShipmentDetails",
      
        
          "shipmentDetailsId":this.shipmentDetailsId.value,
        
      
        
          "itemNumber":this.itemNumber.value,
        
      
        
          "itemPackageLevelIDCode":this.itemPackageLevelIDCode.value,
        
      
        
          "itemGroupCode":this.itemGroupCode.value,
        
      
        
          "itemType":this.itemType.value,
        
      
        
          "originCountryCode":this.originCountryCode.value,
        
      
        
          "quantity":this.quantity.value,
        
      
        
          "numberOfUnits":this.numberOfUnits.value,
        
      
        
          "length":this.length.value,
        
      
        
          "width":this.width.value,
        
      
        
          "height":this.height.value,
        
      
        
          "shipmentContainerInfo":this.shipmentContainerInfo.value
        
      
    };

    this.myForm.setValue({
      
        
          "shipmentDetailsId":null,
        
      
        
          "itemNumber":null,
        
      
        
          "itemPackageLevelIDCode":null,
        
      
        
          "itemGroupCode":null,
        
      
        
          "itemType":null,
        
      
        
          "originCountryCode":null,
        
      
        
          "quantity":null,
        
      
        
          "numberOfUnits":null,
        
      
        
          "length":null,
        
      
        
          "width":null,
        
      
        
          "height":null,
        
      
        
          "shipmentContainerInfo":null
        
      
    });

    return this.serviceShipmentDetails.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "shipmentDetailsId":null,
        
      
        
          "itemNumber":null,
        
      
        
          "itemPackageLevelIDCode":null,
        
      
        
          "itemGroupCode":null,
        
      
        
          "itemType":null,
        
      
        
          "originCountryCode":null,
        
      
        
          "quantity":null,
        
      
        
          "numberOfUnits":null,
        
      
        
          "length":null,
        
      
        
          "width":null,
        
      
        
          "height":null,
        
      
        
          "shipmentContainerInfo":null 
        
      
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
      $class: "com.jda.shipment.visibility.ShipmentDetails",
      
        
          
        
    
        
          
            "itemNumber":this.itemNumber.value,
          
        
    
        
          
            "itemPackageLevelIDCode":this.itemPackageLevelIDCode.value,
          
        
    
        
          
            "itemGroupCode":this.itemGroupCode.value,
          
        
    
        
          
            "itemType":this.itemType.value,
          
        
    
        
          
            "originCountryCode":this.originCountryCode.value,
          
        
    
        
          
            "quantity":this.quantity.value,
          
        
    
        
          
            "numberOfUnits":this.numberOfUnits.value,
          
        
    
        
          
            "length":this.length.value,
          
        
    
        
          
            "width":this.width.value,
          
        
    
        
          
            "height":this.height.value,
          
        
    
        
          
            "shipmentContainerInfo":this.shipmentContainerInfo.value
          
        
    
    };

    return this.serviceShipmentDetails.updateAsset(form.get("shipmentDetailsId").value,this.asset)
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

    return this.serviceShipmentDetails.deleteAsset(this.currentId)
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

    return this.serviceShipmentDetails.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "shipmentDetailsId":null,
          
        
          
            "itemNumber":null,
          
        
          
            "itemPackageLevelIDCode":null,
          
        
          
            "itemGroupCode":null,
          
        
          
            "itemType":null,
          
        
          
            "originCountryCode":null,
          
        
          
            "quantity":null,
          
        
          
            "numberOfUnits":null,
          
        
          
            "length":null,
          
        
          
            "width":null,
          
        
          
            "height":null,
          
        
          
            "shipmentContainerInfo":null 
          
        
      };



      
        if(result.shipmentDetailsId){
          
            formObject.shipmentDetailsId = result.shipmentDetailsId;
          
        }else{
          formObject.shipmentDetailsId = null;
        }
      
        if(result.itemNumber){
          
            formObject.itemNumber = result.itemNumber;
          
        }else{
          formObject.itemNumber = null;
        }
      
        if(result.itemPackageLevelIDCode){
          
            formObject.itemPackageLevelIDCode = result.itemPackageLevelIDCode;
          
        }else{
          formObject.itemPackageLevelIDCode = null;
        }
      
        if(result.itemGroupCode){
          
            formObject.itemGroupCode = result.itemGroupCode;
          
        }else{
          formObject.itemGroupCode = null;
        }
      
        if(result.itemType){
          
            formObject.itemType = result.itemType;
          
        }else{
          formObject.itemType = null;
        }
      
        if(result.originCountryCode){
          
            formObject.originCountryCode = result.originCountryCode;
          
        }else{
          formObject.originCountryCode = null;
        }
      
        if(result.quantity){
          
            formObject.quantity = result.quantity;
          
        }else{
          formObject.quantity = null;
        }
      
        if(result.numberOfUnits){
          
            formObject.numberOfUnits = result.numberOfUnits;
          
        }else{
          formObject.numberOfUnits = null;
        }
      
        if(result.length){
          
            formObject.length = result.length;
          
        }else{
          formObject.length = null;
        }
      
        if(result.width){
          
            formObject.width = result.width;
          
        }else{
          formObject.width = null;
        }
      
        if(result.height){
          
            formObject.height = result.height;
          
        }else{
          formObject.height = null;
        }
      
        if(result.shipmentContainerInfo){
          
            formObject.shipmentContainerInfo = result.shipmentContainerInfo;
          
        }else{
          formObject.shipmentContainerInfo = null;
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
      
        
          "shipmentDetailsId":null,
        
      
        
          "itemNumber":null,
        
      
        
          "itemPackageLevelIDCode":null,
        
      
        
          "itemGroupCode":null,
        
      
        
          "itemType":null,
        
      
        
          "originCountryCode":null,
        
      
        
          "quantity":null,
        
      
        
          "numberOfUnits":null,
        
      
        
          "length":null,
        
      
        
          "width":null,
        
      
        
          "height":null,
        
      
        
          "shipmentContainerInfo":null 
        
      
      });
  }

}
