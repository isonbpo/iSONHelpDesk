import { Injectable } from '@angular/core';
import { AssetsView } from './assets-view.model';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssetsViewServiceService {
  formData :AssetsView;
  constructor(private fb: FormBuilder, private http:HttpClient) { }
  readonly rootURL = 'http://localhost:54277/api';

  //start department sections
  list:AssetsView[];
  getAllAssetsList(){
    return this.http.get<AssetsView[]>(this.rootURL + '/Asset/AssetList');
  }
  
   formModelAsset = this.fb.group({
        id : ['', Validators.required],
        inv_status : ['', Validators.required],	
        inv_product_id	 : ['', Validators.required],
        inv_product_name : ['', Validators.required],	
        inv_serial_no	 : ['', Validators.required],
        owner_id	 : ['', Validators.required],
        related_to_id	 : ['', Validators.required],
        related_to_name	 : ['', Validators.required],
        inv_warranty_start_date	 : ['', Validators.required],
        inv_warranty_end_date	 : ['', Validators.required],
        inv_contract_start_date	 : ['', Validators.required],
        inv_installation_date	 : ['', Validators.required],
        inv_sale_date	 : ['', Validators.required],
        created_ip	 : ['', Validators.required],
        created_by	 : ['', Validators.required],
        created_date	 : ['', Validators.required],
        modified_by	 : ['', Validators.required],
        modified_date	 : ['', Validators.required],
        modified_ip	 : ['', Validators.required],
        last_activity_date	 : ['', Validators.required],
        Useable	 : ['', Validators.required],
        custom_tab_name	 : ['', Validators.required],
        custom_tab_url	 : ['', Validators.required],
        owner_name	 : ['', Validators.required],
        related_to	 : ['', Validators.required],
        transaction_number	 : ['', Validators.required],
        udf_machine_expiry_date	 : ['', Validators.required],
        asset_category_id	 : ['', Validators.required],
        asset_category	 : ['', Validators.required],
        asset_sub_category_id	 : ['', Validators.required],
        asset_sub_category	 : ['', Validators.required],
        asset_product_type	 : ['', Validators.required],
        asset_vender_name	 : ['', Validators.required],
        asset_vender_id	 : ['', Validators.required],
        asset_software_type_id	 : ['', Validators.required],
        asset_software_type	 : ['', Validators.required],
        asset_software_category_id	 : ['', Validators.required],
        asset_software_category	 : ['', Validators.required],
        asset_asset_make	 : ['', Validators.required],
        asset_model	 : ['', Validators.required],
        asset_OEM_serial_number	 : ['', Validators.required],
        asset_issue_sparese	 : ['', Validators.required],
        asset_porpose_process	 : ['', Validators.required],
        asset_owned_lease	 : ['', Validators.required],
        asset_purchase_date	 : ['', Validators.required],
        asset_amount	 : ['', Validators.required],
        asset_currency	 : ['', Validators.required],
        asset_product_type_id	 : ['', Validators.required],
        asset_desc  : ['', Validators.required],

   });


  addAsset() {
    var body = {
      inv_status : this.formModelAsset.value.inv_status,	
      // inv_product_id	 : this.formModelAsset.value.inv_product_id,
      inv_product_name : this.formModelAsset.value.inv_product_name,	
      inv_serial_no	 : this.formModelAsset.value.inv_serial_no,
      // owner_id	 : this.formModelAsset.value.owner_id,
      // related_to_id	 : this.formModelAsset.value.related_to_id,
      // related_to_name	 : this.formModelAsset.value.related_to_name,
      inv_warranty_start_date	 : this.formModelAsset.value.inv_warranty_start_date,
      inv_warranty_end_date	 : this.formModelAsset.value.inv_warranty_end_date,
      // inv_contract_start_date	 : this.formModelAsset.value.inv_contract_start_date,
      inv_installation_date	 : this.formModelAsset.value.inv_installation_date,
      inv_sale_date	 : this.formModelAsset.value.inv_sale_date,
      // created_ip	 : this.formModelAsset.value.created_ip,

      
      // created_by	 : this.formModelAsset.value.created_by,
      

      created_date	 : this.formModelAsset.value.created_date,
      // modified_by	 : this.formModelAsset.value.modified_by,
      // modified_date	 : this.formModelAsset.value.modified_date,
      // modified_ip	 : this.formModelAsset.value.modified_ip,
      // last_activity_date	 : this.formModelAsset.value.last_activity_date,
      // Useable	 : this.formModelAsset.value.Useable,
      // custom_tab_name	 : this.formModelAsset.value.custom_tab_name,
      // custom_tab_url	 : this.formModelAsset.value.custom_tab_url,
      owner_name	 : this.formModelAsset.value.owner_name,
      // related_to	 : this.formModelAsset.value.related_to,
      // transaction_number	 : this.formModelAsset.value.transaction_number,
      // udf_machine_expiry_date	 : this.formModelAsset.value.udf_machine_expiry_date,
      asset_category_id	 : this.formModelAsset.value.asset_category_id,
      asset_category	 : this.formModelAsset.value.asset_category,
      asset_sub_category_id	 : this.formModelAsset.value.asset_sub_category_id,
      asset_sub_category	 : this.formModelAsset.value.asset_sub_category,
      asset_product_type	 : this.formModelAsset.value.asset_product_type,
      asset_vender_name	 : this.formModelAsset.value.asset_vender_name,
      // asset_vender_id	 : this.formModelAsset.value.asset_vender_id,
      asset_software_type_id	 : this.formModelAsset.value.asset_software_type_id,
      asset_software_type	 : this.formModelAsset.value.asset_software_type,
      asset_software_category_id	 : this.formModelAsset.value.asset_software_category_id,
      asset_software_category	 : this.formModelAsset.value.asset_software_category,
      asset_asset_make	 : this.formModelAsset.value.asset_asset_make,
      asset_model	 : this.formModelAsset.value.asset_model,
      asset_OEM_serial_number	 : this.formModelAsset.value.asset_OEM_serial_number,
      asset_issue_sparese	 : this.formModelAsset.value.asset_issue_sparese,
      asset_porpose_process	 : this.formModelAsset.value.asset_porpose_process,
      asset_owned_lease	 : this.formModelAsset.value.asset_owned_lease,
      asset_purchase_date	 : this.formModelAsset.value.asset_purchase_date,
      asset_amount	 : this.formModelAsset.value.asset_amount,
      asset_currency	 : this.formModelAsset.value.asset_currency,
      asset_product_type_id	 : this.formModelAsset.value.asset_product_type_id,
      asset_desc  : this.formModelAsset.value.asset_desc,
    };

    return this.http.post(this.rootURL + '/Asset/AddAsset', body);
  }
  
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
