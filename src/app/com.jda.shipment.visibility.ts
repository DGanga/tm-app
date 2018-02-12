import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace com.jda.shipment.visibility{
   export enum FreightTerms {
      FT_PRE_PAID,
      FT_COLLECT,
   }
   export enum ShipmentStatus {
      CREATED,
      IN_TRANSIT,
      ARRIVED,
   }
   export enum UnitOfMeasure {
      UMS_NULL,
      UMS_IMPERIAL,
      UMS_METRIC,
   }
   export enum ShipmentLegStatus {
      DSTS_NULL,
      DSTS_SL_D_PROCESSING,
      DSTS_SL_D_ASSIGNED_TO_CARRIER,
      DSTS_SL_D_PICKING_UP,
      DSTS_SL_D_IN_TRANSIT,
      DSTS_SL_D_PARTIALLY_DELIVERED,
      DSTS_SL_D_DELIVERED,
      DSTS_SL_D_PARTIALLY_POD,
      DSTS_SL_D_POD,
      DSTS_SL_D_CLOSED,
      DSTS_SL_D_LLPURGED,
   }
   export enum LoadStatus {
      S_NULL,
      S_OPEN,
      S_PLANNED,
      S_TENDERED,
      S_TENDER_REJECTED,
      S_TENDER_ACCEPTED,
      S_LOADING_CONFIRMING,
      S_LOADED_CONFIRMED,
      S_IN_TRANSIT,
      S_STOPPED,
      S_COMPLETED,
      S_CLOSED,
      S_CANCELLED,
   }
   export abstract class Address {
      city: string;
      country: string;
      locality: string;
      region: string;
      street: string;
      street2: string;
      street3: string;
      postalCode: string;
      postOfficeBoxNumber: string;
      latitude: number;
      longitude: number;
   }
   export class Location extends Address {
      locationCode: string;
   }
   export class LoggingInfo {
      createdByUser: string;
      createdDateTime: Date;
      updatedByUser: string;
      updatedDateTime: Date;
   }
   export class ShipmentContainerInfo {
      scaledWeight: number;
      volume: number;
      orderValue: number;
      declaredValue: number;
      nominalWeight: number;
      tareWeight: number;
      pieces: number;
      skids: number;
      ladenLength: number;
      flexibleQuantity1: number;
      flexibleQuantity2: number;
      flexibleQuantity3: number;
      flexibleQuantity4: number;
      flexibleQuantity5: number;
   }
   export class ShipmentDetails extends Asset {
      shipmentDetailsId: string;
      itemNumber: number;
      itemPackageLevelIDCode: string;
      itemGroupCode: string;
      itemType: string;
      originCountryCode: string;
      quantity: number;
      numberOfUnits: number;
      length: number;
      width: number;
      height: number;
      shipmentContainerInfo: ShipmentContainerInfo;
   }
   export class ShipmentLegs extends Asset {
      shipmentLegId: string;
      shipmentSequenceNumber: number;
      shipFromLocation: Location;
      shipToLocation: Location;
      pickupArrivalDateTime: Date;
      pickupDepartureDateTime: Date;
      dropArrivalDateTime: Date;
      dropDepartureDateTime: Date;
      shipmentLegStatus: ShipmentLegStatus;
      load: Load;
   }
   export class Shipment extends Asset {
      shipmentId: string;
      freightTerms: FreightTerms;
      shipFromLocation: Location;
      shipToLocation: Location;
      pickupFromDateTime: Date;
      pickupToDateTime: Date;
      deliveryFromDateTime: Date;
      deliveryToDateTime: Date;
      commodityCode: string;
      unitOfMeasure: UnitOfMeasure;
      shipmentContainerInfo: ShipmentContainerInfo;
      shipmentDetails: ShipmentDetails[];
      loggingInfo: LoggingInfo;
      shipmentLegs: ShipmentLegs[];
   }
   export class Load extends Asset {
      loadId: string;
      shipFromLocation: Location;
      shipToLocation: Location;
      unitOfMeasure: UnitOfMeasure;
      currencyCode: string;
      loadChargeAmount: number;
      loadDimInfo: ShipmentContainerInfo;
      loadStatus: LoadStatus;
      VerifiedGrossMass: number;
      VGMAuthorizer: string;
      VGMWeighingMethod: string;
      VGMWeighingDateTime: Date;
      VGMVerificationDateTime: Date;
      carrierCode: string;
      serviceCode: string;
      VesselArrivalDateTime: Date;
      VesselDepartureDateTime: Date;
      VesselName: string;
      VoyageNumber: string;
      loggingInfo: LoggingInfo;
      ShipmentLegs: ShipmentLegs[];
   }
   export class Booking extends Asset {
      bookingId: string;
      shipFromLocation: Location;
      shipToLocation: Location;
      unitOfMeasure: UnitOfMeasure;
      currencyCode: string;
      chargeAmount: number;
      status: LoadStatus;
      carrierCode: string;
      serviceCode: string;
      VesselArrivalDateTime: Date;
      VesselDepartureDateTime: Date;
      VesselName: string;
      VoyageNumber: string;
      loggingInfo: LoggingInfo;
      loads: Load[];
   }
   export abstract class ShipmentTransaction extends Transaction {
      shipment: Shipment;
   }
   export abstract class LoadTransaction extends Transaction {
      load: Load;
   }
   export abstract class BookingTransaction extends Transaction {
      booking: Booking;
   }
   export class CreateShipment extends ShipmentTransaction {
   }
   export class UpdateShipment extends ShipmentTransaction {
   }
   export class CreateLoad extends ShipmentTransaction {
   }
   export class CurrentLocationUpdateLoad extends LoadTransaction {
   }
   export class CurrentLocationUpdateBooking extends BookingTransaction {
   }
   export abstract class Business extends Participant {
      uniqueId: string;
      businessName: string;
      email: string;
      address: Address;
      accountBalance: number;
   }
   export class Shipper extends Business {
   }
   export class Carrier extends Business {
   }
   export class Supplier extends Business {
   }
   export class SetupDemo extends Transaction {
   }
// }
