import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, Inject, Optional, Input } from '@angular/core';
import { GlobalService } from 'src/app/shared/global.service';
import { FormGroup, FormControl } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { LocationViewServiceService } from 'src/app/View/locationView/shared/location-view-service.service';
import { ToastrService } from 'ngx-toastr';
import { LocationViewComponent } from 'src/app/view/locationView/locationView.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-general',
  templateUrl: './location-general.component.html',
  styleUrls: ['./location-general.component.scss']
})
export class LocationGeneralComponent implements OnInit {
  
  local_data:any;

  //createAccountForm: FormGroup;
  countries: {};
  states: {};
  cities: {};
  accountTypeList:{};
  zoneList:{};
  createDateAndBy:{};
  
  constructor(private router:Router ,private Service:GlobalService, private LocationService : LocationViewServiceService, private toastr : ToastrService ){}

  ngOnInit() {
    this.getCountryList();
    this.getAccountTypeList('ACCTYPE'); 
    this.getZoneList('CUSTZONE');
    this.getCreateByAndDate();
  }

   onSubmit() {
     this.LocationService.addLocation().subscribe(
       res=>
         {
          this.toastr.success('Added Successfully','Location');
         });
   }

getCountryList()
{
  this.Service.getCountry().subscribe(
    data => this.countries = data
  );
}



onChangeCountry(country_id: number) {
  if (country_id) {
    this.Service.getState(country_id).subscribe(
      data => {
        this.states = data;
        this.cities = null;
      }
    );
  } else {
    this.states = null;
    this.cities = null;
  }
}

onChangeState(state_code: number) {
  if (state_code) {
    this.Service.getCities(state_code).subscribe(
      data => this.cities = data
    );
  } else {
    this.cities = null;
  }
}

getAccountTypeList(dynamicParameter)
{
  this.Service.getGlobalDropDown(dynamicParameter).subscribe(
    data=>{
      this.accountTypeList = data
    }
  );
}

getZoneList(dynamicParameter)
{
  
  this.Service.getGlobalDropDown(dynamicParameter).subscribe(
    data=>{
      this.zoneList = data
  }
  );
}


getCreateByAndDate()
{
  this.Service.getCreateByDate().subscribe(
    data => {
      this.createDateAndBy = data
      console.log(data);
    }
  );
}

getError(el) {
  switch (el) {
    case 'cust_type':
      if (this.LocationService.formModelLocation.get('cust_type').hasError('required')) {
        return 'Please select the Account Type';
      }
      break;
    case 'cust_name':
      if (this.LocationService.formModelLocation.get('cust_name').hasError('required')) {
        return 'Account Name is required';
      }
      break;
      case 'cust_short_name':
        if (this.LocationService.formModelLocation.get('cust_short_name').hasError('required')) {
          return 'Account Short Name is required';
      }
      break;
      case 'product_manufacturer_name':
        if (this.LocationService.formModelLocation.get('product_manufacturer_name').hasError('required')) {
          return 'Manufacturer name is required';
      }
      break;
      case 'cust_zone':
        if (this.LocationService.formModelLocation.get('cust_zone').hasError('required')) {
          return 'Please select the zone';
      }
      break;
      case 'cust_address1':
        if (this.LocationService.formModelLocation.get('cust_address1').hasError('required')) {
          return 'Enter the address';
      }
      break;
      case 'cust_country_code':
        if (this.LocationService.formModelLocation.get('cust_country_code').hasError('required')) {
          return 'Please select the country';
      }
      break;
      case 'cust_state_code':
        if (this.LocationService.formModelLocation.get('cust_state_code').hasError('required')) {
          return 'Please select the state';
      }
      break;
      case 'cust_city_code':
        if (this.LocationService.formModelLocation.get('cust_city_code').hasError('required')) {
          return 'Please select the city';
      }
      break;
      case 'cust_zip_code':
        if (this.LocationService.formModelLocation.get('cust_zip_code').hasError('required')) {
          return 'Zipcode is required';
      }
      break;
    default:
      return '';
  }
}

}