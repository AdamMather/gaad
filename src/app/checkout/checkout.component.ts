import { Component, ElementRef, HostListener, NgZone, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

import { Global } from '../core/global.model';
import { Contact } from './../core/contact.model';
import { Address } from './../core/address.model';
import { Payment } from './../core/payment.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  //models
  public address: Address;
  public contact: Contact;
  public payment: Payment;

  // form statuses
  public submitContact : boolean;
  public submitShipping : boolean;
  public submitPayment : boolean;
  public submitBilling : boolean;

  //
  public addressControl: FormControl;

  @ViewChild("shipAddrLine1")
  public shipAddressElementRef: ElementRef;
  @ViewChild("billAddrLine1")
  public billAddressElementRef: ElementRef;

  constructor(
    private global: Global,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private router: Router
  ) { }

  ngOnInit() {

    // store current url path
    this.global.path = this.router.url;
    //
    this.address = new Address({});
    //
    this.contact = new Contact({});
    //
    this.payment = new Payment({});

    // initialize form submission statuses
    this.submitContact = false;
    this.submitShipping = false;
    this.submitPayment = false;
    this.submitBilling = false;

    //create addressControl FormControl
    this.addressControl = new FormControl();
  }

  loadAddressInfo(code: string, searchElementRef: ElementRef, firstName?: string, lastName?: string): void {

    if (firstName) {
      this.address.firstName = firstName;
    }

    if (lastName) {
      this.address.lastName = lastName;
    }

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // Get each component of the address from the place details
          // and fill the corresponding field on the form.
          for (var i = 0; i < place.address_components.length; i++) {
            let address = place.address_components[i];
            let addressType = address.types[0];
            switch (addressType) {
              case 'street_number': {
                this.address.addrLine1 = address.long_name;
                break;
              }
              case 'route': {
                this.address.addrLine1 += ' ' + address.long_name;
                break;
              }
              case 'locality': {
                this.address.addrLine2 = address.long_name;
                break;
              }
              case 'postal_town': {
                this.address.city = address.long_name;
                break;
              }
              case 'postal_code': {
                this.address.postcode = address.long_name;
                break;
              }
            }
          }

          if (code == 'SHIP') {
            //
            this.global.shipping = new Address({});
            //
            this.global.shipping._id = this.address._id;
            this.global.shipping.firstName = this.address.firstName;
            this.global.shipping.lastName = this.address.lastName;
            this.global.shipping.addrLine1 = this.address.addrLine1;
            this.global.shipping.addrLine2 = this.address.addrLine2;
            this.global.shipping.city = this.address.city;
            this.global.shipping.postcode = this.address.postcode;
            this.global.shipping.save = this.address.save;

            //console.log('global shipping: ' + JSON.stringify(this.global.shipping));
          }

          if (code == 'BILL') {
            //
            this.global.billing = new Address({});
            //
            this.global.billing._id = this.address._id;
            this.global.billing.firstName = this.address.firstName;
            this.global.billing.lastName = this.address.lastName;
            this.global.billing.addrLine1 = this.address.addrLine1;
            this.global.billing.addrLine2 = this.address.addrLine2;
            this.global.billing.city = this.address.city;
            this.global.billing.postcode = this.address.postcode;
            this.global.billing.save = this.address.save;
          }
        });
      });
    });
  }

  onSubmit(form: NgForm, name?: string): void {

    if (name) {
      switch (name) {
        case 'contact': {
          this.submitContact = true;
          break;
        }
        case 'shipping': {
          this.submitShipping = true;
          break;
        }
        case 'payment': {
          this.submitPayment = true;
          break;
        }
        case 'billing': {
          this.submitBilling = true;
          break;
        }
      }
    }

    console.log('submitContact: ' + this.submitContact + '\nsubmitShipping: ' + this.submitShipping  + '\nsubmitPayment: ' + this.submitPayment + '\nsubmitBilling: ' + this.submitBilling + '\n');

    //
    form.reset();
  }

  getFocus(eleId: string): void {
    document.getElementById(eleId).focus();
  }

  expInsert(model: Payment, string: string): void {
    if (string.length == 2) {
      model.expiry = model.expiry + '/';
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKey(this: any, event: any): void {

    // key code for Enter / CR
    if (event.keyCode == 13) {
      let attId = event.srcElement.getAttribute('id');

      switch (attId) {
        case 'errMsg_cpReq':
        case 'errMsg_cpInv': {
          this.getFocus('contactPoint');
          break;
        }
        case 'errMsg_fnReq':
        case 'errMsg_fnMinLgt':
        case 'errMsg_fnMaxLgt': {
          this.getFocus('firstName');
          break;
        }
        case 'errMsg_lnReq':
        case 'errMsg_lnMinLgt':
        case 'errMsg_lnMaxLgt': {
          this.getFocus('lastName');
          break;
        }
        case 'errMsg_ship_a1Req': {
          this.getFocus('ship_addrLine1');
          break;
        }
        case 'errMsg_ship_ctReq': {
          this.getFocus('ship_city');
          break;
        }
        case 'errMsg_ship_pcReq':
        case 'errMsg_ship_pcInv': {
          this.getFocus('ship_postcode');
          break;
        }
        case 'errMsg_bill_a1Req': {
          this.getFocus('bill_addrLine1');
          break;
        }
        case 'errMsg_bill_ctReq': {
          this.getFocus('bill_city');
          break;
        }
        case 'errMsg_bill_pcReq':
        case 'errMsg_pill_pcInv': {
          this.getFocus('bill_postcode');
          break;
        }
        
        case 'errMsg_cpReq':
        case 'errMsg_cpInv': {
          this.getFocus('contactPoint');
          break;
        }
        case 'errMsg_cnReq':
        case 'errMsg_cnInv': {
          this.getFocus('cardnumber');
          break;
        }
        case 'errMsg_rnReq':
        case 'errMsg_rnMinLgt':
        case 'errMsg_rnMaxLgt': {
          this.getFocus('cardholdername');
          break;
        }

        case 'errMsg_expReq':
        case 'errMsg_expInv': {
          this.getFocus('expiry');
          break;
        }
        case 'errMsg_cvvReq':
        case 'errMsg_cvvInv': {
          this.getFocus('cvv');
          break;
        }
      }
    }
  }
}
