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
      // related_to : ['', Validators.required],
      // related_to_name : ['', Validators.required],
      // related_to_id : ['', Validators.required],
      // contact_enabled : ['', Validators.required],
       contact_title : ['', Validators.required],
      // contact_fname : ['', Validators.required],
      // contact_mname : ['', Validators.required],
      // contact_lname : ['', Validators.required],
      contact_full_name : ['', Validators.required],
      contact_address1 : ['', Validators.required],
      // contact_address2 : ['', Validators.required],
      // contact_address3 : ['', Validators.required],
      contact_city_code : ['', Validators.required],
      contact_zip_code : ['', Validators.required],
      contact_state_code : ['', Validators.required],
      contact_country_code : ['', Validators.required],
      contact_birthday : ['', Validators.required],
      //contact_anniversaray : ['', Validators.required],
      contact_dept_id : ['', Validators.required],
      contact_desig_id : ['', Validators.required],
      contact_team_id : ['', Validators.required],
      // contact_seniority : ['', Validators.required],
      // contact_profession : ['', Validators.required],
      // contact_manager : ['', Validators.required],
      // contact_extension : ['', Validators.required],
      // owner_id : ['', Validators.required],
      owner_name : ['', Validators.required],
      // contact_shareable : ['', Validators.required],
      // created_ip : ['', Validators.required],
      created_by : ['', Validators.required],
      created_date : ['', Validators.required],
      // modified_by : ['', Validators.required],
      // modified_date : ['', Validators.required],
      // modified_ip : ['', Validators.required],
      // last_activity_date : ['', Validators.required],
      contact_timezone_id : ['', Validators.required],
      //contact_timezone_timespan : ['', Validators.required],
      contact_type_id : ['', Validators.required],
      contact_login_id : ['', Validators.required],
      contact_password : ['', Validators.required],
      // contact_current_theme : ['', Validators.required],
      // contact_show_menubar : ['', Validators.required],
      // contact_show_toolbar : ['', Validators.required],
      // contact_show_alertbar : ['', Validators.required],
      // contact_show_popup : ['', Validators.required],
      // Useable : ['', Validators.required],
      // contact_phone : ['', Validators.required],
       contact_emailid : ['', Validators.required, Validators.email],
      // custom_tab_name : ['', Validators.required],
      // custom_tab_url : ['', Validators.required],
      contact_role_id : ['', Validators.required],
      // contact_signature : ['', Validators.required],
      // contact_cti_url : ['', Validators.required],
      // cti_url : ['', Validators.required],
      // cust_reportingtocolumn : ['', Validators.required],
      // contact_chat_status : ['', Validators.required],
      contact_zone : ['', Validators.required],
      // api_key : ['', Validators.required],
      // custportal_contactId : ['', Validators.required],
      crm_contact_code : ['', Validators.required],
   });


  addContact() {
    var body = {
      transaction_number : this.formModelContacts.value.transaction_number,
      // related_to : this.formModelContacts.value.related_to,
      // related_to_name : this.formModelContacts.value.related_to_name,
      // related_to_id : this.formModelContacts.value.related_to_id,
      // contact_enabled : this.formModelContacts.value.contact_enabled,
      contact_title : this.formModelContacts.value.contact_title,
      // contact_fname : this.formModelContacts.value.contact_fname,
      // contact_mname : this.formModelContacts.value.contact_mname,
      // contact_lname : this.formModelContacts.value.contact_lname,
      contact_full_name : this.formModelContacts.value.contact_full_name,
      contact_address1 : this.formModelContacts.value.contact_address1,
      // contact_address2 : this.formModelContacts.value.contact_address2,
      // contact_address3 : this.formModelContacts.value.contact_address3,
      contact_city_code : this.formModelContacts.value.contact_city_code,
      contact_zip_code : this.formModelContacts.value.contact_zip_code,
      contact_state_code : this.formModelContacts.value.contact_state_code,
      contact_country_code : this.formModelContacts.value.contact_country_code,
      contact_birthday : this.formModelContacts.value.contact_birthday,
      //contact_anniversaray : this.formModelContacts.value.contact_anniversaray,
      contact_dept_id : this.formModelContacts.value.contact_dept_id,
      contact_desig_id : this.formModelContacts.value.contact_desig_id,
      contact_team_id : this.formModelContacts.value.contact_team_id,
      // contact_seniority : this.formModelContacts.value.contact_seniority,
      // contact_profession : this.formModelContacts.value.contact_profession,
      // contact_manager : this.formModelContacts.value.contact_manager,
      // contact_extension : this.formModelContacts.value.contact_extension,
      // owner_id : this.formModelContacts.value.owner_id,
      owner_name : this.formModelContacts.value.owner_name,
      contact_shareable : this.formModelContacts.value.contact_shareable,
      //created_ip : this.formModelContacts.value.created_ip,
      created_by : this.formModelContacts.value.created_by,
      created_date : this.formModelContacts.value.created_date,
      // modified_by : this.formModelContacts.value.modified_by,
      // modified_date : this.formModelContacts.value.modified_date,
      // modified_ip : this.formModelContacts.value.modified_ip,
      // last_activity_date : this.formModelContacts.value.last_activity_date,
      contact_timezone_id : this.formModelContacts.value.contact_timezone_id,
      // contact_timezone_timespan : this.formModelContacts.value.contact_timezone_timespan,
      contact_type_id : this.formModelContacts.value.contact_type_id,
      contact_login_id : this.formModelContacts.value.contact_login_id,
      contact_password : this.formModelContacts.value.contact_password,
      // contact_current_theme : this.formModelContacts.value.contact_current_theme,
      // contact_show_menubar : this.formModelContacts.value.contact_show_menubar,
      // contact_show_toolbar : this.formModelContacts.value.contact_show_toolbar,
      // contact_show_alertbar : this.formModelContacts.value.contact_show_alertbar,
      // contact_show_popup : this.formModelContacts.value.contact_show_popup,
      // Useable : this.formModelContacts.value.Useable,
      // contact_phone : this.formModelContacts.value.contact_phone,
       contact_emailid : this.formModelContacts.value.contact_emailid,
      // custom_tab_name : this.formModelContacts.value.custom_tab_name,
      // custom_tab_url : this.formModelContacts.value.contact_tab_url,
      contact_role_id : this.formModelContacts.value.contact_role_id,
      // contact_signature : this.formModelContacts.value.contact_signature,
      // contact_cti_url : this.formModelContacts.value.contact_cti_url,
      // cti_url : this.formModelContacts.value.cti_url,
      // cust_reportingtocolumn : this.formModelContacts.value.cust_reportingtocolumn,
      // contact_chat_status : this.formModelContacts.value.contact_chat_status,
      contact_zone : this.formModelContacts.value.contact_zone,
      // api_key : this.formModelContacts.value.api_key,
      // custportal_contactId : this.formModelContacts.value.custportal_contactId,
      crm_contact_code : this.formModelContacts.value.crm_contact_code,
    };

    console.log("Contact Body details");
    console.log(body);

    return this.http.post(this.rootURL + '/contacts/AddContact', body);
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
