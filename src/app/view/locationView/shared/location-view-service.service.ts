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
    cust_name2 : ['', Validators.required],
    cust_short_name : ['', Validators.required],
    cust_enabled  : ['', Validators.required],
    cust_type  : ['', Validators.required],
    cust_zone  : ['', Validators.required],
    cust_address1  : ['', Validators.required],
    cust_address2  : ['', Validators.required],
    cust_address3  : ['', Validators.required],
    cust_city_code  : ['', Validators.required],
    cust_state_code  : ['', Validators.required],
    cust_zip_code  : ['', Validators.required],
    cust_tin_no  : ['', Validators.required],
    cust_pan_no  : ['', Validators.required],
    cust_category  : ['', Validators.required],
    cust_rating  : ['', Validators.required],
    cust_extension  : ['', Validators.required],
    cust_website_address  : ['', Validators.required],
    cust_country_code  : ['', Validators.required],
    cust_tan_no  : ['', Validators.required],
    cust_service_tax_no  : ['', Validators.required],
    cust_tax_scheme_id  : ['', Validators.required],
    owner_id : ['', Validators.required],
    owner_name : ['', Validators.required],
    created_by : ['', Validators.required],
    created_ip  : ['', Validators.required],
    modified_by  : ['', Validators.required],
    modified_date  : ['', Validators.required],
    modified_ip  : ['', Validators.required],
    last_activity_date  : ['', Validators.required],
    cust_case_notifcation  : ['', Validators.required],
    cust_notify_caller  : ['', Validators.required],
    cust_notify_contact  : ['', Validators.required],
    cust_case_notification_to  : ['', Validators.required],
    useable  : ['', Validators.required],
    custom_tab_name  : ['', Validators.required],
    custom_tab_url  : ['', Validators.required],
    cust_phone  : ['', Validators.required],
    cust_emailid  : ['', Validators.required],
    cust_domain  : ['', Validators.required],
    cust_ValidityStatus  : ['', Validators.required],
    cust_Expiry_date : ['', Validators.required],
    cust_saleslocation  : ['', Validators.required],
    cust_saleslocation_id  : ['', Validators.required],
    cust_salesPerson  : ['', Validators.required],
    cust_salesPerson_id  : ['', Validators.required],
    cust_serviceLocation  : ['', Validators.required],
    cust_serviceLocation_id  : ['', Validators.required],
    cust_ServiceBy  : ['', Validators.required],
    cust_ServiceBy_id  : ['', Validators.required],
   });


  // addDepartment() {
  //   var body = {
  //     dept_name: this.formModel.value.dept_name,
  //     dept_enabled: this.formModel.value.dept_enabled,
  //   };
  //   return this.http.post(this.rootURL + '/department/CreateDepartment', body);
  // }
  
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




