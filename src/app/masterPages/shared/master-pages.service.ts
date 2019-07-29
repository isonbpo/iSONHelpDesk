import { Injectable } from '@angular/core';
import { Department } from './department.model';
import { HttpClient } from '@angular/common/http';
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
  formData :Department;
  constructor(private fb: FormBuilder, private http:HttpClient) { }
  readonly rootURL = 'http://localhost:54277/api';

  //start department sections
  list:Department[];
  getAllDepartment(){
    return this.http.get<Department[]>(this.rootURL + '/department/DepartmentList');
  }
  
  formModel = this.fb.group({
    dept_id: ['', Validators.required],
    dept_name: ['', Validators.required],
    dept_enabled:['', Validators.required],
    dept_sc_id:['', Validators.required]
  });


  addDepartment() {
    var body = {
      dept_name: this.formModel.value.dept_name,
      dept_enabled: this.formModel.value.dept_enabled,
    };
    return this.http.post(this.rootURL + '/department/CreateDepartment', body);
  }
  
  populateForm(Department)
  {
    this.formModel.setValue(Department);
  }


  deleteDepartment(dept_id:number)
  {
    return this.http.delete(this.rootURL+'/department/DeleteDepartment?dept_id='+dept_id);
  }

  editDepartment(dept_id:number)
  {
    return this.http.get(this.rootURL+'/department/EditDepartment?dept_id='+dept_id);
  }
//end department section

//start designation section
    listDesig:Designation[];
    getAllDesignation(){
      return this.http.get<Designation[]>(this.rootURL + '/Designation/DesignationList');
    }
    
    formModelDesig = this.fb.group({
      desig_id: ['', Validators.required],
      desig_name: ['', Validators.required],
      desig_enabled:['', Validators.required]
    });

    addDesignation() {
      var body = {
        desig_name: this.formModelDesig.value.desig_name,
        desig_enabled: this.formModelDesig.value.desig_enabled,
      };
      return this.http.post(this.rootURL + '/designation/CreateDesignation', body);
    }
    populateFormDesig(Designation)
    {
      this.formModelDesig.setValue(Designation);
    }
    deleteDesignation(desig_id:number)
    {
      return this.http.delete(this.rootURL+'/Designation/DeleteDesignation?desig_id='+desig_id);
    }
  
    editDesignation(desig_id:number)
    {
      return this.http.get(this.rootURL+'/designation/EditDesignation?desig_id='+desig_id);
    }
// End Designation Section


//Start Team section
listTeam:Team[];
getAllTeam(){
  return this.http.get<Team[]>(this.rootURL + '/Team/TeamList');
}

formModelTeam = this.fb.group({
  team_id: ['', Validators.required],
  team_name: ['', Validators.required],
  team_enabled:['', Validators.required]
});

addTeam() {
  var body = {
    team_name: this.formModelTeam.value.team_name,
    team_enabled: this.formModelTeam.value.team_enabled,
  };
  return this.http.post(this.rootURL + '/team/CreateTeam', body);
}

deleteTeam(team_id:number)
{
  return this.http.delete(this.rootURL+'/team/DeleteTeam?team_id='+team_id);
}

editTeam(team_id:number)
{
  return this.http.get(this.rootURL+'/team/EditTeam?team_id='+team_id);
}
// End Team Section

//Start Role section
listRole:Role[];
getAllRole(){
  return this.http.get<Role[]>(this.rootURL + '/Role/RoleList');
}

formModelRole = this.fb.group({
  role_id: ['', Validators.required],
  role_name: ['', Validators.required],
  role_description: ['', Validators.required],
  role_enabled:['', Validators.required],
  role_cust_enable:['', Validators.required]
});

addRole() {
  var body = {
    role_name: this.formModelRole.value.role_name,
    role_description:this.formModelRole.value.role_description,
    role_enabled: this.formModelRole.value.role_enabled,
  };
  return this.http.post(this.rootURL + '/role/CreateRole', body);
}

deleteRole(role_id:number)
{
  return this.http.delete(this.rootURL+'/role/DeleteRole?role_id='+role_id);
}

editRole(role_id:number)
{
  return this.http.get(this.rootURL+'/role/EditRole?role_id='+role_id);
}
// End Role Section

//Start AssetCategory section
listAssetCategory:AssetCategory[];
getAllAssetCategory(){
  return this.http.get<AssetCategory[]>(this.rootURL + '/AssetCategory/AssetCategoryList');
}

formModelAssetCategory = this.fb.group({
  asset_category_id :  ['', Validators.required],
    asset_category_name : ['', Validators.required],
    asset_category_enabled : ['', Validators.required],
    asset_category_discription : ['', Validators.required]
});

addAssetCategory() {
  var body = {
    asset_category_name: this.formModelAssetCategory.value.asset_category_name,
    asset_category_discription:this.formModelAssetCategory.value.asset_category_discription,
    asset_category_enabled: this.formModelAssetCategory.value.asset_category_enabled
  };
  console.log(body);
  return this.http.post(this.rootURL + '/AssetCategory/CreateAssetCategory', body);
}

deleteAssetCategory(asset_category_id:number)
{
  return this.http.delete(this.rootURL+'/AssetCategory/DeleteAssetCategory?asset_category_id='+asset_category_id);
}

editAssetCategory(asset_category_id:number)
{
  return this.http.get(this.rootURL+'/AssetCategory/EditAssetCategory?asset_category_id='+asset_category_id);
}
// End Asset Category Section

//Start Products section
listProducts:Products[];
getAllProducts(){
  return this.http.get<Products[]>(this.rootURL + '/Products/ProductsList');
}

formModelProducts = this.fb.group({
    product_id : ['', Validators.required],
    product_name : ['', Validators.required],
    product_type : ['', Validators.required],
    product_vender_name : ['', Validators.required],
    product_manufacturer_name : ['', Validators.required],
    product_part_no : ['', Validators.required],
    product_part_discription : ['', Validators.required],
    product_enabled : ['', Validators.required]

});

addProduct() {
  var body = {
    product_name : this.formModelProducts.value.product_name,
    product_type : this.formModelProducts.value.product_type,
    product_vender_name : this.formModelProducts.value.product_vender_name,
    product_manufacturer_name : this.formModelProducts.value.product_manufacturer_name,
    product_part_no : this.formModelProducts.value.product_part_no,
    product_part_discription : this.formModelProducts.value.product_part_discription,
    product_enabled : this.formModelProducts.value.product_enabled
  };
  return this.http.post(this.rootURL + '/products/CreateProducts', body);
}

deleteProducts(product_id:number)
{
  return this.http.delete(this.rootURL+'/products/DeleteProducts?product_id='+product_id);
}

editProducts(product_id:number)
{
  return this.http.get(this.rootURL+'/products/EditProducts?product_id='+product_id);
}
// End Product Section

//Start Products Type section
listProductType:ProductType[];
getAllProductType(){
  return this.http.get<ProductType[]>(this.rootURL + '/ProductType/ProductsTypeList');
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
  return this.http.get<SoftwareType[]>(this.rootURL + '/SoftwareType/SoftwareTypeList');
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
  return this.http.get<SoftwareType[]>(this.rootURL + '/SoftwareCategory/SoftwareCategoryList');
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

//Start Asset Sub Category section
listAssetSubCategory:AssetSubCategory[];
getAllAssetSubCategory(){
  return this.http.get<AssetSubCategory[]>(this.rootURL + '/AssetSubCategory/AssetSubCategoryList');
}

formModelAssetSubCategory = this.fb.group({
    asset_sub_category_id :  ['', Validators.required],
    asset_sub_category_name :  ['', Validators.required],
    asset_sub_category_enabled :  ['', Validators.required],
    asset_sub_category_discription :  ['', Validators.required]
});

addAssetSubCategory() {
  var body = {
    asset_sub_category_name :  this.formModelAssetSubCategory.value.asset_sub_category_name,
    asset_sub_category_enabled :  this.formModelAssetSubCategory.value.asset_sub_category_enabled,
    asset_sub_category_discription :  this.formModelAssetSubCategory.value.asset_sub_category_discription,
  };
  return this.http.post(this.rootURL + '/AssetSubCategory/CreateAssetSubCategory', body);
}

deleteAssetSubCategory(asset_sub_category_id:number)
{
  return this.http.delete(this.rootURL+'/AssetSubCategory/DeleteAssetSubCategory?asset_sub_category_id='+asset_sub_category_id);
}

editAssetSubCategory(asset_sub_category_id:number)
{
  return this.http.get(this.rootURL+'/AssetSubCategory/EditAssetSubCategory?asset_sub_category_id='+asset_sub_category_id);
}
// End Asset Sub Category Section



//Start Time Zone
listTimeZone:TimeZone[];

getAllTimeZone(){
  return this.http.get<AssetSubCategory[]>(this.rootURL + '/TimeZone/TimeZoneList');
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
