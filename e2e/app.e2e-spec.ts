import { AngularTestPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Starting tests for tm-app', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be tm-app', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('tm-app');
    })
  });

  it('navbar-brand should be jda-network@0.0.1',() => {
    var navbarBrand = element(by.css('.navbar-brand')).getWebElement();
    expect(navbarBrand.getText()).toBe('jda-network@0.0.1');
  });

  
    it('ShipmentDetails component should be loadable',() => {
      page.navigateTo('/ShipmentDetails');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('ShipmentDetails');
    });

    it('ShipmentDetails table should have 13 columns',() => {
      page.navigateTo('/ShipmentDetails');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(13); // Addition of 1 for 'Action' column
      });
    });

  
    it('ShipmentLegs component should be loadable',() => {
      page.navigateTo('/ShipmentLegs');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('ShipmentLegs');
    });

    it('ShipmentLegs table should have 11 columns',() => {
      page.navigateTo('/ShipmentLegs');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(11); // Addition of 1 for 'Action' column
      });
    });

  
    it('Shipment component should be loadable',() => {
      page.navigateTo('/Shipment');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Shipment');
    });

    it('Shipment table should have 15 columns',() => {
      page.navigateTo('/Shipment');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(15); // Addition of 1 for 'Action' column
      });
    });

  
    it('Load component should be loadable',() => {
      page.navigateTo('/Load');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Load');
    });

    it('Load table should have 22 columns',() => {
      page.navigateTo('/Load');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(22); // Addition of 1 for 'Action' column
      });
    });

  
    it('Booking component should be loadable',() => {
      page.navigateTo('/Booking');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Booking');
    });

    it('Booking table should have 16 columns',() => {
      page.navigateTo('/Booking');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(16); // Addition of 1 for 'Action' column
      });
    });

  

});
