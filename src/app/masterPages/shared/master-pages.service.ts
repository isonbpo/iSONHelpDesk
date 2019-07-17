import { Injectable } from '@angular/core';
import { Department } from './department.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { Designation } from './designation.model';
import { Team } from './team.model';
import { Role } from './role.model';
import { AssetCategory } from './asset-category.model';
import { Products } from './products.model';
import { ProductType } from './product-type.model';
import { SoftwareType } from './software-type.model';
import { SoftwareCategory } from './software-category.model';
import { AssetSubCategory } from './asset-sub-category.model';
import { TimeZone } from './time-zone.model';


@Injectable({
  providedIn: 'root'
})
export class MasterPagesService {
  
  //formData :Department;
  department: Observable<Department[]>;
  newdepartment: Department;

  constructor(private fb: FormBuilder, private http:HttpClient) { }
  readonly rootURL = 'http://localhost:54277/api';

  //Department Start
  getDepartment() {
    return this.http.get<Department[]>(this.rootURL + '/department/DepartmentList');
  }
  AddDepartment(dpt: Department) {

    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      dept_name: dpt.dept_name , dept_enabled: dpt.dept_enabled      
    };
  
    return this.http.post<Department>(this.rootURL + '/Department', body, { headers });

  }

  EditDepartment(dpt: Department) {
    console.log(dpt);
     const params = new HttpParams().set('dept_id', dpt.dept_id.toString());
     const headers = new HttpHeaders().set('content-type', 'application/json');
     var body = {
       dept_id:dpt.dept_id, dept_name: dpt.dept_name , dept_enabled: dpt.dept_enabled      
     }
     
     return this.http.put<Department>(this.rootURL + '/department/UpdateDepartment?dept_id=' + dpt.dept_id, body, { headers })
  }

  
  DeleteDepartment(dpt: Department) {
    const params = new HttpParams().set('ID', dpt.dept_id.toString());
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      dept_id:dpt.dept_id, dept_name: dpt.dept_name , dept_enabled: dpt.dept_enabled      
    }
    return this.http.delete<Department>(this.rootURL + '/department/DeleteDepartment?dept_id='+ dpt.dept_id)
  }
//Department End


//Designation Start
getDesignation() {
  return this.http.get<Designation[]>(this.rootURL + '/Designation/DesignationList');
}
AddDesignation(dg: Designation) {

  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
    desig_name: dg.desig_name , desig_enabled: dg.desig_enabled      
  };
  
  return this.http.post<Designation>(this.rootURL + '/Designation', body, { headers });

}

EditDesignation(dg: Designation) {
  console.log(dg);
   const params = new HttpParams().set('desig_id', dg.desig_id.toString());
   const headers = new HttpHeaders().set('content-type', 'application/json');
   var body = {
     desig_id:dg.desig_id, desig_name: dg.desig_name , desig_enabled: dg.desig_enabled
   }
  
   return this.http.put<Designation>(this.rootURL + '/designation/UpdateDesignation?desig_id=' + dg.desig_id, body, { headers })
}


DeleteDesignation(dg: Designation) {
  const params = new HttpParams().set('ID', dg.desig_id.toString());
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
    desig_id:dg.desig_id, desig_name: dg.desig_name , desig_enabled: dg.desig_enabled
  }
  return this.http.delete<Designation>(this.rootURL + '/designation/DeleteDesignation?desig_id='+ dg.desig_id)
}
//Designation End

//Team Start
getTeam() {
  return this.http.get<Team[]>(this.rootURL + '/Team/TeamList');
}
AddTeam(tm: Team) {

  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
    team_name: tm.team_name , team_enabled: tm.team_enabled      
  };
  return this.http.post<Team>(this.rootURL + '/Team', body, { headers });

}

EditTeam(tm: Team) {
  
   const params = new HttpParams().set('team_id', tm.team_id.toString());
   const headers = new HttpHeaders().set('content-type', 'application/json');
   var body = {
     team_id:tm.team_id, team_name: tm.team_name , team_enabled: tm.team_enabled
   }
   return this.http.put<Team>(this.rootURL + '/Team/UpdateTeam?team_id=' + tm.team_id, body, { headers })
}


DeleteTeam(tm: Team) {
  const params = new HttpParams().set('ID', tm.team_id.toString());
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
    team_id:tm.team_id, team_name: tm.team_name , team_enabled: tm.team_enabled
  }
  return this.http.delete<Team>(this.rootURL + '/Team/DeleteTeam?team_id='+ tm.team_id)
}
//Team End

//Role Start
getRole() {
  return this.http.get<Role[]>(this.rootURL + '/Role/RoleList');
}
AddRole(rl: Role) {
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
    role_name: rl.role_name ,  role_description: rl.role_description, role_enabled: rl.role_enabled
  };
  return this.http.post<Role>(this.rootURL + '/Role', body, { headers });

}

EditRole(rl: Role) {
  
   const params = new HttpParams().set('role_id', rl.role_id);
   const headers = new HttpHeaders().set('content-type', 'application/json');
   var body = {
     role_id:rl.role_id, role_name: rl.role_name ,  role_description: rl.role_description, role_enabled: rl.role_enabled
   }
   return this.http.put<Role>(this.rootURL + '/Role/UpdateRole?role_id=' + rl.role_id, body, { headers })
}


DeleteRole(rl: Role) {
  const params = new HttpParams().set('ID', rl.role_id);
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
    role_id:rl.role_id, role_name: rl.role_name ,  role_description: rl.role_description, role_enabled: rl.role_enabled
  }
  return this.http.delete<Role>(this.rootURL + '/Role/DeleteRole?role_id='+ rl.role_id)
}
//Role End


//AssetCategory Start
getAssetCategory() {
  return this.http.get<AssetCategory[]>(this.rootURL + '/AssetCategory/AssetCategoryList');
}


AddAssetCategory(ac: AssetCategory){
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {

  asset_category_name : ac.asset_category_name, asset_category_enabled : ac.asset_category_enabled,     	asset_category_discription : ac.asset_category_discription
  };
  
  return this.http.post<AssetCategory>(this.rootURL + '/AssetCategory', body, { headers });
}

EditAssetCategory(ac: AssetCategory){
  const params = new HttpParams().set('asset_category_id', ac.asset_category_id);
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
    asset_category_id : ac.asset_category_id,  asset_category_name : ac.asset_category_name, asset_category_enabled : ac.asset_category_enabled,     	asset_category_discription : ac.asset_category_discription
  };
  
  return this.http.put<AssetCategory>(this.rootURL + '/AssetCategory/UpdateAssetCategory?asset_category_id=' + ac.asset_category_id, body, { headers });
}





DeleteAssetCategory(ac: AssetCategory) {
  const params = new HttpParams().set('asset_category_id', ac.asset_category_id);
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
    asset_category_id:ac.asset_category_id, asset_category_name: ac.asset_category_name ,  asset_category_description: ac.asset_category_discription, asset_category_enabled: ac.asset_category_enabled
  }
  return this.http.delete<AssetCategory>(this.rootURL + '/AssetCategory/DeleteAssetCategory?asset_category_id='+ ac.asset_category_id)
}
//Asset Category End


//Start Asset Sub Category section
getAssetSubCategory() {
  return this.http.get<AssetSubCategory[]>(this.rootURL + '/AssetSubCategory/AssetSubCategoryList');
}


AddAssetSubCategory(asc: AssetSubCategory){
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
  asset_sub_category_name : asc.asset_sub_category_name, asset_sub_category_enabled : asc.asset_sub_category_enabled,     	asset_sub_category_discription : asc.asset_sub_category_discription
  
  };
  
  return this.http.post<AssetSubCategory>(this.rootURL + '/AssetSubCategory', body, { headers });
}

EditAssetSubCategory(asc: AssetSubCategory){
  const params = new HttpParams().set('asset_category_id', asc.asset_sub_category_id);
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
    asset_sub_category_id : asc.asset_sub_category_id,  asset_sub_category_name : asc.asset_sub_category_name, asset_sub_category_enabled : asc.asset_sub_category_enabled,     	asset_sub_category_discription : asc.asset_sub_category_discription
  };
  
  return this.http.put<AssetSubCategory>(this.rootURL + '/AssetSubCategory/UpdateAssetSubCategory?asset_sub_category_id=' + asc.asset_sub_category_id, body, { headers });
}

DeleteAssetSubCategory(asc: AssetSubCategory) {
  const params = new HttpParams().set('asset_category_id', asc.asset_sub_category_id);
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
    asset_sub_category_id : asc.asset_sub_category_id,  asset_sub_category_name : asc.asset_sub_category_name, asset_sub_category_enabled : asc.asset_sub_category_enabled,     	asset_sub_category_discription : asc.asset_sub_category_discription
  }
  return this.http.delete<AssetSubCategory>(this.rootURL + '/AssetSubCategory/DeleteAssetSubCategory?asset_sub_category_id='+ asc.asset_sub_category_id)
}
// End Asset Sub Category Section




//Start Products section

getProducts() {
  return this.http.get<Products[]>(this.rootURL + '/Products/ProductsList');
}


AddProducts(pro: Products){
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
  product_name : pro.product_name, product_enabled : pro.product_enabled, product_discription : pro.product_part_discription,
  product_type : pro.product_type, product_vender_name : pro.product_vender_name, product_manufacturer_name : pro.product_manufacturer_name,
  product_part_no : pro.product_part_no
  
  };
  
  return this.http.post<Products>(this.rootURL + '/Products', body, { headers });
}

EditProducts(pro: Products){
  const params = new HttpParams().set('product_id', pro.product_id);
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
    product_id : pro.product_id,    product_name : pro.product_name, product_enabled : pro.product_enabled, product_part_discription : pro.product_part_discription,
    product_type : pro.product_type, product_vender_name : pro.product_vender_name, product_manufacturer_name : pro.product_manufacturer_name,
    product_part_no : pro.product_part_no
  };
  
  return this.http.put<Products>(this.rootURL + '/Products/UpdateProducts?product_id=' + pro.product_id, body, { headers });
}

DeleteProducts(pro: Products) {
  const params = new HttpParams().set('product_id', pro.product_id);
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
    product_id : pro.product_id,    product_name : pro.product_name, product_enabled : pro.product_enabled, product_part_discription : pro.product_part_discription,
    product_type : pro.product_type, product_vender_name : pro.product_vender_name, product_manufacturer_name : pro.product_manufacturer_name,
    product_part_no : pro.product_part_no
  }
  
  return this.http.delete<Products>(this.rootURL + '/Products/DeleteProducts?product_id='+ pro.product_id)
}
// End Product Section

//Start Products Type section
listProductType:ProductType[];
getAllProductType(){
  this.http.get(this.rootURL+'/ProductType/ProductsTypeList')
  .toPromise()
  .then(res=>this.listProductType = res as ProductType[]);
}

formModelProductType = this.fb.group({
    product_type_id :  ['', Validators.required],
    product_type_name :  ['', Validators.required],
    product_type :  ['', Validators.required],
    product_type_enabled :  ['', Validators.required],
    product_category_name :  ['', Validators.required],
    product_discription :  ['', Validators.required]

});

addProductType() {
  var body = {
    product_type_name : this.formModelProductType.value.product_type_name,
    product_type : this.formModelProductType.value.product_type,
    product_type_enabled : this.formModelProductType.value.product_type_enabled,
    product_category_name : this.formModelProductType.value.product_category_name,
    product_discription : this.formModelProductType.value.product_discription
  };
  return this.http.post(this.rootURL + '/ProductType/CreateProductsType', body);
}

deleteProductType(product_type_id:number)
{
  return this.http.delete(this.rootURL+'/producttype/DeleteProductType?product_type_id='+product_type_id);
}

editProductType(product_type_id:number)
{
  return this.http.get(this.rootURL+'/producttype/EditProductType?product_type_id='+product_type_id);
}
// End Product Type Section

//Start Software Type section
listSoftwareType:SoftwareType[];
getAllSoftwareType(){
  this.http.get(this.rootURL+'/SoftwareType/SoftwareTypeList')
  .toPromise()
  .then(res=>this.listSoftwareType = res as SoftwareType[]);
}

formModelSoftwareType = this.fb.group({
  software_type_id :  ['', Validators.required],
  software_type_name :  ['', Validators.required],
  software_type_enabled :  ['', Validators.required],
  software_type_discription :  ['', Validators.required]
});

addSoftwareType() {
  var body = {
    software_type_name : this.formModelSoftwareType.value.software_type_name,
    software_type_enabled :  this.formModelSoftwareType.value.software_type_enabled,
    software_type_discription : this.formModelSoftwareType.value.software_type_discription
  };
  return this.http.post(this.rootURL + '/SoftwareType/CreateSoftwareType', body);
}

deleteSoftwareType(software_type_id:number)
{
  return this.http.delete(this.rootURL+'/SoftwareType/DeleteSoftwareType?software_type_id='+software_type_id);
}

editSoftwareType(software_type_id:number)
{
  return this.http.get(this.rootURL+'/SoftwareType/EditSoftwareType?software_type_id='+software_type_id);
}
// End Product Section

//Start Software Category section
listSoftwareCategory:SoftwareCategory[];
getAllSoftwareCategory(){
  this.http.get(this.rootURL+'/SoftwareCategory/SoftwareCategoryList')
  .toPromise()
  .then(res=>this.listSoftwareCategory = res as SoftwareCategory[]);
}

formModelSoftwareCategory = this.fb.group({
  software_category_id : ['', Validators.required],
  software_category_name : ['', Validators.required],
  software_category_enabled : ['', Validators.required],
  software_category_discription : ['', Validators.required]
});

addSoftwareCategory() {
  var body = {
  software_category_name : this.formModelSoftwareCategory.value.software_category_name,
  software_category_enabled : this.formModelSoftwareCategory.value.software_category_enabled,
  software_category_discription : this.formModelSoftwareCategory.value.software_category_discription
  };
  return this.http.post(this.rootURL + '/SoftwareCategory/CreateSoftwareCategory', body);
}

deleteSoftwareCategory(software_category_id:number)
{
  return this.http.delete(this.rootURL+'/SoftwareCategory/DeleteSoftwareCategory?software_category_id='+software_category_id);
}

editSoftwareCategory(software_category_id:number)
{
  return this.http.get(this.rootURL+'/SoftwareCategory/EditSoftwareCategory?software_category_id='+software_category_id);
}
// End Software Category Section





//Start Time Zone
listTimeZone:TimeZone[];
getAllTimeZone(){
  this.http.get(this.rootURL+'/TimeZone/TimeZoneList')
  .toPromise()
  .then(res=>this.listTimeZone = res as TimeZone[]);
}

formModelTimeZone = this.fb.group({
  timezone_id:   ['', Validators.required],
  timezone_name :   ['', Validators.required],
  timezone_timespan_minutes :   ['', Validators.required]
  
});

addTimeZone() {
  var body = {
    timezone_name : this.formModelTimeZone.value.timezone_name,
    timezone_timespan_minutes : this.formModelTimeZone.value.timezone_timespan_minutes,
  };
  return this.http.post(this.rootURL + '/TimeZone/CreateTimeZone', body);
}

deleteTimeZone(timezone_id:number)
{
  return this.http.delete(this.rootURL+'/TimeZone/DeleteTimeZone?timezone_id='+timezone_id);
}

editTimeZone(timezone_id:number)
{
  return this.http.get(this.rootURL+'/TimeZone/EditTimeZone?timezone_id='+timezone_id);
}
// End Time Zone
}
