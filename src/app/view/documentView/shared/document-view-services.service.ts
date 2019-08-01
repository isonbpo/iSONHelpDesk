import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { DocumentView } from './document-view.model';


@Injectable({
  providedIn: 'root'
})
export class DocumentViewServicesService {
  formData :DocumentView;
  constructor(private fb: FormBuilder, private http:HttpClient) { }
  readonly rootURL = 'http://localhost:54277/api';

  //start department sections
  list:DocumentView[];
  getAllDocument(){
    return this.http.get<DocumentView[]>(this.rootURL + '/document/DocumentList');
  }
  
   formModelLocation = this.fb.group({
          id:['',Validators.required],
          related_to:['',Validators.required],
          related_to_name:['',Validators.required],
          related_to_id:['',Validators.required],
          document_type:['',Validators.required],
          document_name:['',Validators.required],
          document_file_name:['',Validators.required],
          document_path:['',Validators.required],
          document_description:['',Validators.required],
          document_size:['',Validators.required],
          document_extension:['',Validators.required],
          document_mime_type:['',Validators.required],
          document_shareable:['',Validators.required],
          owner_id:['',Validators.required],
          owner_name:['',Validators.required],
          created_ip:['',Validators.required],
          created_by:['',Validators.required],
          created_date:['',Validators.required],
          modified_by:['',Validators.required],
          modified_date:['',Validators.required],
          modified_ip:['',Validators.required],
          last_activity_date:['',Validators.required],
          Useable:['',Validators.required],
          custom_tab_name:['',Validators.required],
          custom_tab_url:['',Validators.required],
          transaction_number:['',Validators.required],
          document_file_Details:['',Validators.required],
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
