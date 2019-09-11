import { Injectable } from '@angular/core';
import { LocationView } from './location-view.model';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LocationViewServiceService {
  formData :LocationView;
  constructor(private fb: FormBuilder, private http:HttpClient) { }
  readonly rootURL = 'http://localhost:54277/api';

  //start department sections
  list:LocationView[];
  getAllLocation(){
    return this.http.get<LocationView[]>(this.rootURL + '/location/LocationList');
  }
  
   formModelLocation = this.fb.group({
     
    id : ['', Validators.required],
    transaction_number : ['', Validators.required],
    cust_name  : ['', Validators.required],
    //cust_name2 : ['', Validators.required],
    cust_short_name : ['', Validators.required],
    cust_enabled  : ['', Validators.required],
    cust_type  : ['', Validators.required],
    cust_zone  : ['', Validators.required],
    cust_address1  : ['', Validators.required],
    //cust_address2  : ['', Validators.required],
    //cust_address3  : ['', Validators.required],
    cust_city_code  : ['', Validators.required],
    cust_state_code  : ['', Validators.required],
    cust_zip_code  : ['', Validators.required],
    // cust_tin_no  : ['', Validators.required],
    // cust_pan_no  : ['', Validators.required],
    // cust_category  : ['', Validators.required],
    // cust_rating  : ['', Validators.required],
    // cust_extension  : ['', Validators.required],
    // cust_website_address  : ['', Validators.required],
    cust_country_code  : ['', Validators.required],
    // cust_tan_no  : ['', Validators.required],
    // cust_service_tax_no  : ['', Validators.required],
    // cust_tax_scheme_id  : ['', Validators.required],
    // owner_id : ['', Validators.required],
    // owner_name : ['', Validators.required],
    created_by : ['', Validators.required],
    //created_by : ['', Validators.required],
    // created_ip  : ['', Validators.required],
    created_date : ['', Validators.required],
    // modified_by  : ['', Validators.required],
    // modified_date  : ['', Validators.required],
    // modified_ip  : ['', Validators.required],
    // last_activity_date  : ['', Validators.required],
    // cust_case_notifcation  : ['', Validators.required],
    // cust_notify_caller  : ['', Validators.required],
    // cust_notify_contact  : ['', Validators.required],
    // cust_case_notification_to  : ['', Validators.required],
    // useable  : ['', Validators.required],
    // custom_tab_name  : ['', Validators.required],
    // custom_tab_url  : ['', Validators.required],
    // cust_phone  : ['', Validators.required],
    // cust_emailid  : ['', Validators.required],
    // cust_domain  : ['', Validators.required],
    // cust_ValidityStatus  : ['', Validators.required],
    // cust_Expiry_date : ['', Validators.required],
    // cust_saleslocation  : ['', Validators.required],
    // cust_saleslocation_id  : ['', Validators.required],
    // cust_salesPerson  : ['', Validators.required],
    // cust_salesPerson_id  : ['', Validators.required],
    // cust_serviceLocation  : ['', Validators.required],
    // cust_serviceLocation_id  : ['', Validators.required],
    // cust_ServiceBy  : ['', Validators.required],
    // cust_ServiceBy_id  : ['', Validators.required],
   });


   addLocation() {
     var body = {
     
      transaction_number : this.formModelLocation.value.transaction_number,
      cust_name  : this.formModelLocation.value.cust_name,
      //cust_name2 : this.formModelLocation.value.cust_name2,
      cust_short_name : this.formModelLocation.value.cust_short_name,
      cust_enabled  : this.formModelLocation.value.cust_enabled,
      cust_type  : this.formModelLocation.value.cust_type,
      cust_zone  : this.formModelLocation.value.cust_zone,
      cust_address1  : this.formModelLocation.value.cust_address1,
      //cust_address2  : this.formModelLocation.value.cust_address2,
      //cust_address3  : this.formModelLocation.value.cust_address3,
      cust_city_code  : this.formModelLocation.value.cust_city_code,
      cust_state_code  : this.formModelLocation.value.cust_state_code,
      cust_zip_code  : this.formModelLocation.value.cust_zip_code,
      // cust_tin_no  : this.formModelLocation.value.cust_tin_no,
      // cust_pan_no  : this.formModelLocation.value.cust_pan_no,
      // cust_category  : this.formModelLocation.value.cust_category,
      // cust_rating  : this.formModelLocation.value.cust_rating,
      // cust_extension  : this.formModelLocation.value.cust_extension,
      // cust_website_address  : this.formModelLocation.value.cust_website_address,
      cust_country_code  : this.formModelLocation.value.cust_country_code,
      // cust_tan_no  : this.formModelLocation.value.cust_tan_no,
      // cust_service_tax_no  : this.formModelLocation.value.cust_service_tax_no,
      // cust_tax_scheme_id  : this.formModelLocation.value.cust_tax_scheme_id,
      // owner_id : this.formModelLocation.value.owner_id,
      // owner_name : this.formModelLocation.value.owner_name,
      created_by : this.formModelLocation.value.created_by,
      //created_ip  : this.formModelLocation.value.created_ip,
      created_date : this.formModelLocation.value.created_date,
      // modified_by  : this.formModelLocation.value.modified_by,
      // modified_date  : this.formModelLocation.value.modified_date,
      // modified_ip  : this.formModelLocation.value.modified_ip,
      // last_activity_date  : this.formModelLocation.value.last_activity_date,
      // cust_case_notifcation  : this.formModelLocation.value.cust_case_notifcation,
      // cust_notify_caller  : this.formModelLocation.value.cust_notify_caller,
      // cust_notify_contact  : this.formModelLocation.value.cust_notify_contact,
      // cust_case_notification_to  : this.formModelLocation.value.cust_case_notifcation_to,
      // useable  : this.formModelLocation.value.useable,
      // custom_tab_name  : this.formModelLocation.value.custom_tab_name,
      // custom_tab_url  : this.formModelLocation.value.custom_tab_url,
      // cust_phone  : this.formModelLocation.value.cust_phone,
      // cust_emailid  : this.formModelLocation.value.cust_emailid,
      // cust_domain  : this.formModelLocation.value.cust_domain,
      // cust_ValidityStatus  : this.formModelLocation.value.cust_ValidityStatus,
      // cust_Expiry_date : this.formModelLocation.value.cust_Expiry_date,
      // cust_saleslocation  : this.formModelLocation.value.cust_saleslocation,
      // cust_saleslocation_id  : this.formModelLocation.value.cust_saleslocation_id,
      // cust_salesPerson  : this.formModelLocation.value.cust_salesPerson,
      // cust_salesPerson_id  : this.formModelLocation.value.cust_salesPerson_id,
      // cust_serviceLocation  : this.formModelLocation.value.cust_serviceLocation,
      // cust_serviceLocation_id  : this.formModelLocation.value.cust_serviceLocation_id,
      // cust_ServiceBy  : this.formModelLocation.value.cust_ServiceBy,
      // cust_ServiceBy_id  : this.formModelLocation.value.cust_ServiceBy_id,
     };
     console.log("The data in the body");
     console.log(body);
     return this.http.post(this.rootURL+'/location/AddLocation', body);
   }
  
  // populateForm(Department)
  // {
  //   this.formModel.setValue(Department);
  // }


  // deleteDepartment(dept_id:number)
  // {
  //   return this.http.delete(this.rootURL+'/department/DeleteDepartment?dept_id='+dept_id);
  // }

  // editDepartment(dept_id:number)
  // {
  //   return this.http.get(this.rootURL+'/department/EditDepartment?dept_id='+dept_id);
  // }
//end department section
}




