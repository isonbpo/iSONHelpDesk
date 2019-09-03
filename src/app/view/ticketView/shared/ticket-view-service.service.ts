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


  addTicket() {
    var body = {
      transaction_number : this.formModelTicket.value.transaction_number,
      owner_id : this.formModelTicket.value.owner_id,
      case_source : this.formModelTicket.value.case_source,
      case_source_value : this.formModelTicket.value.case_source_value,
      case_customer_id : this.formModelTicket.value.case_customer_id,
      case_customer_name : this.formModelTicket.value.case_customer_name,
      case_caller_id : this.formModelTicket.value.case_caller_id,
      case_caller_name : this.formModelTicket.value.case_caller_name,
      case_caller_phone : this.formModelTicket.value.case_caller_phone,
      case_caller_email : this.formModelTicket.value.case_caller_email,
      case_contact_id : this.formModelTicket.value.case_contact_id,
      case_contact_name : this.formModelTicket.value.case_contact_name,
      case_contact_phone : this.formModelTicket.value.case_contact_phone,
      case_contact_email : this.formModelTicket.value.case_contact_email,
      case_service_type_name : this.formModelTicket.value.case_service_type_name,
      case_severity_desc : this.formModelTicket.value.case_severity_desc,
      case_subject : this.formModelTicket.value.case_subject,
      case_description : this.formModelTicket.value.case_description,
      case_type_id : this.formModelTicket.value.case_type_id,
      case_type_name : this.formModelTicket.value.case_type_name,
      case_status_id : this.formModelTicket.value.case_status_id,
      case_status_name : this.formModelTicket.value.case_status_name,
      case_status_reason_id : this.formModelTicket.value.case_status_reason_id,
      case_status_reason_desc : this.formModelTicket.value.case_status_reason_desc,
      case_inventory_id : this.formModelTicket.value.case_inventory_id,
      case_serial_number : this.formModelTicket.value.case_serial_number,
      case_category_id : this.formModelTicket.value.case_category_id,
      case_category_name : this.formModelTicket.value.case_category_name,
      case_subcategory_id : this.formModelTicket.value.case_subcategory_id,
      case_subcategory_name : this.formModelTicket.value.case_subcategory_name,
      case_reference_data : this.formModelTicket.value.case_reference_data,
      open_time : this.formModelTicket.value.open_time,
      target_end_time : this.formModelTicket.value.target_end_time,
      end_time : this.formModelTicket.value.end_time,
      end_remarks : this.formModelTicket.value.end_remarks,
      created_ip : this.formModelTicket.value.created_ip,
      created_by : this.formModelTicket.value.created_by,
      created_date : this.formModelTicket.value.created_date,
      modified_by : this.formModelTicket.value.modified_by,
      modified_date : this.formModelTicket.value.modified_date,
      modified_ip : this.formModelTicket.value.modified_ip,
      last_activity_date : this.formModelTicket.value.last_activity_date,
      case_severity_id : this.formModelTicket.value.case_severity_id,
      case_service_type_id : this.formModelTicket.value.case_service_type_id,
      Useable : this.formModelTicket.value.Useable,
      custom_tab_name : this.formModelTicket.value.custom_tab_name,
      custom_tab_url : this.formModelTicket.value.custom_tab_url,
      assign_level : this.formModelTicket.value.assign_level,
      case_callback_number : this.formModelTicket.value.case_callback_number,
      case_reassigned_time : this.formModelTicket.value.case_reassigned_time,
      first_open_time : this.formModelTicket.value.first_open_time,
      case_notification_modifyby : this.formModelTicket.value.case_notification_modifyby,
      case_notification_closer : this.formModelTicket.value.case_notification_closer,
      next_status_time : this.formModelTicket.value.next_status_time,
      Location_name : this.formModelTicket.value.Location_name,
      Location_id : this.formModelTicket.value.Location_id,
      Team_name : this.formModelTicket.value.Team_name,
      Team_id : this.formModelTicket.value.Team_id,
      close_time : this.formModelTicket.value.close_time,
      assign_to_id : this.formModelTicket.value.assign_to_id,
      assign_to_Location_name : this.formModelTicket.value.assign_to_Location_name,
      assign_to_Location_id : this.formModelTicket.value.assign_to_Location_id,
      assign_to_Team_name : this.formModelTicket.value.assign_to_Team_name,
      assign_to_Team_id : this.formModelTicket.value.assign_to_Team_id,
      case_account_validity : this.formModelTicket.value.case_account_validity,
      response_time : this.formModelTicket.value.response_time,
      work_close_time : this.formModelTicket.value.work_close_time,
      working_time : this.formModelTicket.value.working_time,
      case_repeat_call : this.formModelTicket.value.case_repeat_call,
      case_close_type : this.formModelTicket.value.case_close_type,
    };

    console.log(body);

    return this.http.post(this.rootURL + '/ticketView/AddTicket', body);
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
