import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactsView } from './contacts-view.model';


@Injectable({
  providedIn: 'root'
})
export class ContactsViewServiceService {
  formData :ContactsView;
  constructor(private fb: FormBuilder, private http:HttpClient) { }
  readonly rootURL = 'http://localhost:54277/api';

  //start Contacts sections
  list:ContactsView[];
  getAllContactsList(){
    return this.http.get<ContactsView[]>(this.rootURL + '/contacts/ContactsList');
  }
  
   formModelContacts = this.fb.group({
      id : ['', Validators.required],
      transaction_number : ['', Validators.required],
      related_to : ['', Validators.required],
      related_to_name : ['', Validators.required],
      related_to_id : ['', Validators.required],
      contact_enabled : ['', Validators.required],
      contact_title : ['', Validators.required],
      contact_fname : ['', Validators.required],
      contact_mname : ['', Validators.required],
      contact_lname : ['', Validators.required],
      contact_full_name : ['', Validators.required],
      contact_address1 : ['', Validators.required],
      contact_address2 : ['', Validators.required],
      contact_address3 : ['', Validators.required],
      contact_city_code : ['', Validators.required],
      contact_zip_code : ['', Validators.required],
      contact_state_code : ['', Validators.required],
      contact_country_code : ['', Validators.required],
      contact_birthday : ['', Validators.required],
      contact_anniversaray : ['', Validators.required],
      contact_dept_id : ['', Validators.required],
      contact_desig_id : ['', Validators.required],
      contact_team_id : ['', Validators.required],
      contact_seniority : ['', Validators.required],
      contact_profession : ['', Validators.required],
      contact_manager : ['', Validators.required],
      contact_extension : ['', Validators.required],
      owner_id : ['', Validators.required],
      owner_name : ['', Validators.required],
      contact_shareable : ['', Validators.required],
      created_ip : ['', Validators.required],
      created_by : ['', Validators.required],
      created_date : ['', Validators.required],
      modified_by : ['', Validators.required],
      modified_date : ['', Validators.required],
      modified_ip : ['', Validators.required],
      last_activity_date : ['', Validators.required],
      contact_timezone_id : ['', Validators.required],
      contact_timezone_timespan : ['', Validators.required],
      contact_type_id : ['', Validators.required],
      contact_login_id : ['', Validators.required],
      contact_password : ['', Validators.required],
      contact_current_theme : ['', Validators.required],
      contact_show_menubar : ['', Validators.required],
      contact_show_toolbar : ['', Validators.required],
      contact_show_alertbar : ['', Validators.required],
      contact_show_popup : ['', Validators.required],
      Useable : ['', Validators.required],
      contact_phone : ['', Validators.required],
      contact_emailid : ['', Validators.required],
      custom_tab_name : ['', Validators.required],
      custom_tab_url : ['', Validators.required],
      contact_role_id : ['', Validators.required],
      contact_signature : ['', Validators.required],
      contact_cti_url : ['', Validators.required],
      cti_url : ['', Validators.required],
      cust_reportingtocolumn : ['', Validators.required],
      contact_chat_status : ['', Validators.required],
      contact_zone : ['', Validators.required],
      api_key : ['', Validators.required],
      custportal_contactId : ['', Validators.required],
      crm_contact_code : ['', Validators.required],
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
