import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { TicketView } from './ticket-view.model';

@Injectable({
  providedIn: 'root'
})
export class TicketViewServiceService {
  formData :TicketView;
  constructor(private fb: FormBuilder, private http:HttpClient) { }
  readonly rootURL = 'http://localhost:54277/api';

  //start department sections
  list:TicketView[];
  getAllTicket(){
    return this.http.get<TicketView[]>(this.rootURL + '/ticketView/TicketList');
  }
  
   formModelTicket = this.fb.group({
    id : ['', Validators.required],
    transaction_number : ['', Validators.required],
    owner_id : ['', Validators.required],
    case_source : ['', Validators.required],
    case_source_value : ['', Validators.required],
    case_customer_id : ['', Validators.required],
    case_customer_name : ['', Validators.required],
    case_caller_id : ['', Validators.required],
    case_caller_name : ['', Validators.required],
    case_caller_phone : ['', Validators.required],
    case_caller_email : ['', Validators.required],
    case_contact_id : ['', Validators.required],
    case_contact_name : ['', Validators.required],
    case_contact_phone : ['', Validators.required],
    case_contact_email : ['', Validators.required],
    case_service_type_name : ['', Validators.required],
    case_severity_desc : ['', Validators.required],
    case_subject : ['', Validators.required],
    case_description : ['', Validators.required],
    case_type_id : ['', Validators.required],
    case_type_name : ['', Validators.required],
    case_status_id : ['', Validators.required],
    case_status_name : ['', Validators.required],
    case_status_reason_id : ['', Validators.required],
    case_status_reason_desc : ['', Validators.required],
    case_inventory_id : ['', Validators.required],
    case_serial_number : ['', Validators.required],
    case_category_id : ['', Validators.required],
    case_category_name : ['', Validators.required],
    case_subcategory_id : ['', Validators.required],
    case_subcategory_name : ['', Validators.required],
    case_reference_data : ['', Validators.required],
    open_time : ['', Validators.required],
    target_end_time : ['', Validators.required],
    end_time : ['', Validators.required],
    end_remarks : ['', Validators.required],
    created_ip : ['', Validators.required],
    created_by : ['', Validators.required],
    created_date : ['', Validators.required],
    modified_by : ['', Validators.required],
    modified_date : ['', Validators.required],
    modified_ip : ['', Validators.required],
    last_activity_date : ['', Validators.required],
    case_severity_id : ['', Validators.required],
    case_service_type_id : ['', Validators.required],
    Useable : ['', Validators.required],
    custom_tab_name : ['', Validators.required],
    custom_tab_url : ['', Validators.required],
    assign_level : ['', Validators.required],
    case_callback_number : ['', Validators.required],
    case_reassigned_time : ['', Validators.required],
    first_open_time : ['', Validators.required],
    case_notification_modifyby : ['', Validators.required],
    case_notification_closer : ['', Validators.required],
    next_status_time : ['', Validators.required],
    Location_name : ['', Validators.required],
    Location_id : ['', Validators.required],
    Team_name : ['', Validators.required],
    Team_id : ['', Validators.required],
    close_time : ['', Validators.required],
    assign_to_id : ['', Validators.required],
    assign_to_Location_name : ['', Validators.required],
    assign_to_Location_id : ['', Validators.required],
    assign_to_Team_name : ['', Validators.required],
    assign_to_Team_id : ['', Validators.required],
    case_account_validity : ['', Validators.required],
    response_time : ['', Validators.required],
    work_close_time : ['', Validators.required],
    working_time : ['', Validators.required],
    case_repeat_call : ['', Validators.required],
    case_close_type : ['', Validators.required],
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
