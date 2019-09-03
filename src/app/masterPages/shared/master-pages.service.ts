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
import { TicketSubCategory } from './ticket-sub-category.model';
import { TicketCategory } from './ticket-category.model';


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

  updateDepartment(dept_id:string,dept_name:string,dept_enabled:string) {
    var body = {
      dept_id: dept_id,
      dept_name: dept_name,
      dept_enabled: dept_enabled,
    };
    return this.http.post(this.rootURL + '/department/UpdateDepartment', body);
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

  getActiveDepartment(){
    return this.http.get<Department[]>(this.rootURL + '/ActiveData/ActiveDepartmentList');
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

    updateDesignation(desig_id:string,desig_name:string,desig_enabled:string) {
      
      var body = {
        desig_id: desig_id,
        desig_name: desig_name,
        desig_enabled: desig_enabled,
      };
      console.log(body);
      return this.http.post(this.rootURL + '/designation/UpdateDesignation', body);
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

    getActiveDesignation(){
      return this.http.get<Designation[]>(this.rootURL + '/ActiveData/ActiveDesignationList');
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

updateTeam(team_id:string,team_name:string,team_enabled:string) {
  var body = {
    team_id: team_id,
    team_name: team_name,
    team_enabled: team_enabled,
  };
  return this.http.post(this.rootURL + '/team/UpdateTeam', body);
}

deleteTeam(team_id:number)
{
  return this.http.delete(this.rootURL+'/team/DeleteTeam?team_id='+team_id);
}

editTeam(team_id:number)
{
  return this.http.get(this.rootURL+'/team/EditTeam?team_id='+team_id);
}

getActiveTeam(){
  return this.http.get<Team[]>(this.rootURL + '/ActiveData/ActiveTeamList');
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

updateRole(role_id:string,role_name:string,role_enabled:string,role_description:string) {
      
  var body = {
    role_id:role_id,
    role_name:role_name,
    role_enabled: role_enabled,
    role_description:role_description,
    
  };
  return this.http.post(this.rootURL + '/role/UpdateRole', body);
}

deleteRole(role_id:number)
{
  return this.http.delete(this.rootURL+'/role/DeleteRole?role_id='+role_id);
}

editRole(role_id:number)
{
  return this.http.get(this.rootURL+'/role/EditRole?role_id='+role_id);
}

getActiveRole(){
  return this.http.get<Role[]>(this.rootURL + '/ActiveData/ActiveRoleList');
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
  return this.http.post(this.rootURL + '/AssetCategory/CreateAssetCategory', body);
}

updateAssetCategory(asset_category_id:string,asset_category_name:string,asset_category_enabled:string,asset_category_discription:string) {
      
  var body = {
    asset_category_id:asset_category_id,
    asset_category_name: asset_category_name,
    asset_category_discription:asset_category_discription,
    asset_category_enabled: asset_category_enabled
    
  };
  return this.http.post(this.rootURL + '/AssetCategory/UpdateAssetCategory', body);
}

deleteAssetCategory(asset_category_id:number)
{
  return this.http.delete(this.rootURL+'/AssetCategory/DeleteAssetCategory?asset_category_id='+asset_category_id);
}

editAssetCategory(asset_category_id:number)
{
  return this.http.get(this.rootURL+'/AssetCategory/EditAssetCategory?asset_category_id='+asset_category_id);
}

getActiveAssetCategory(){
  return this.http.get<AssetCategory[]>(this.rootURL + '/ActiveData/ActiveAssetCategoryList');
}
// End Asset Category Section

//Start Products section
listProducts:Products[];
getAllProducts(){
  return this.http.get<Products[]>(this.rootURL + '/Products/ProductsList');
}

formModelProducts = this.fb.group({
    product_type_id : ['', Validators.required],
    product_type_name : ['', Validators.required],
    
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
    product_type_id : this.formModelProducts.value.product_type_name,
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

updateProducts(product_id:string,product_name:string,product_type_id:string,product_vender_name:string,product_manufacturer_name:string
  ,product_part_no:string,product_enabled:string,product_part_discription:string) {
  var body = {
    product_id : product_id,
    product_type_id : product_type_id,
    product_name : product_name,
    product_vender_name : product_vender_name,
    product_manufacturer_name : product_manufacturer_name,
    product_part_no : product_part_no,
    product_part_discription : product_part_discription,
    product_enabled : product_enabled
  };
  
  return this.http.post(this.rootURL + '/products/UpdateProduct', body);
}

deleteProducts(product_id:number)
{
  return this.http.delete(this.rootURL+'/products/DeleteProducts?product_id='+product_id);
}

editProducts(product_id:number)
{
  return this.http.get(this.rootURL+'/products/EditProducts?product_id='+product_id);
}

getActiveProducts(){
  return this.http.get<Products[]>(this.rootURL + '/ActiveData/ActiveProductsList');
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
updateProductType(product_type_id : string, product_type:string ,product_type_name : string ,product_category_name : string ,product_discription : string ,product_type_enabled : string)
{
  var body = {
    product_type_id : product_type_id,
    product_type_name : product_type_name,
    product_type : product_type,
    product_type_enabled : product_type_enabled,
    product_category_name : product_category_name,
    product_discription : product_discription
  };
  console.log("Here is the body");
  console.log(body);
  return this.http.post(this.rootURL + '/ProductType/UpdateProductsType', body);
}
deleteProductType(product_type_id:number)
{
  return this.http.delete(this.rootURL+'/producttype/DeleteProductType?product_type_id='+product_type_id);
}

editProductType(product_type_id:number)
{
  return this.http.get(this.rootURL+'/producttype/EditProductType?product_type_id='+product_type_id);
}

getActiveProductType(){
  return this.http.get<ProductType[]>(this.rootURL + '/ActiveData/ActiveProductsTypeList');
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
updateSoftwareType(software_type_id,software_type_name,software_type_enabled,software_type_discription) {
  var body = {
    software_type_id : software_type_id,
    software_type_name : software_type_name,
    software_type_enabled :  software_type_enabled,
    software_type_discription : software_type_discription
  };
  return this.http.post(this.rootURL + '/SoftwareType/UpdateSoftwareType', body);
}
deleteSoftwareType(software_type_id:number)
{
  return this.http.delete(this.rootURL+'/SoftwareType/DeleteSoftwareType?software_type_id='+software_type_id);
}

editSoftwareType(software_type_id:number)
{
  return this.http.get(this.rootURL+'/SoftwareType/EditSoftwareType?software_type_id='+software_type_id);
}

getActiveSoftwareType(){
  return this.http.get<SoftwareType[]>(this.rootURL + '/ActiveData/ActiveSoftwareTypeList');
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

getActiveSoftwareCategory(){
  return this.http.get<SoftwareType[]>(this.rootURL + '/ActiveData/ActiveSoftwareCategoryList');
}
// End Software Category Section

//Start Asset Sub Category section
listAssetSubCategory:AssetSubCategory[];
getAllAssetSubCategory(){
  return this.http.get<AssetSubCategory[]>(this.rootURL + '/AssetSubCategory/AssetSubCategoryList');
}

formModelAssetSubCategory = this.fb.group({
    asset_category_id :   ['', Validators.required],
    asset_category_name :   ['', Validators.required],
    asset_sub_category_id :  ['', Validators.required],
    asset_sub_category_name :  ['', Validators.required],
    asset_sub_category_enabled :  ['', Validators.required],
    asset_sub_category_discription :  ['', Validators.required]
});

addAssetSubCategory() {
  var body = {
    asset_category_id : this.formModelAssetSubCategory.value.asset_category_name,
    asset_category_name : this.formModelProducts.value.asset_category_name,
    asset_sub_category_name :  this.formModelAssetSubCategory.value.asset_sub_category_name,
    asset_sub_category_enabled :  this.formModelAssetSubCategory.value.asset_sub_category_enabled,
    asset_sub_category_discription :  this.formModelAssetSubCategory.value.asset_sub_category_discription,
  };
  return this.http.post(this.rootURL + '/AssetSubCategory/CreateAssetSubCategory', body);
}


updateAssetSubCategory(asset_category_id:string, asset_category_name:string, asset_sub_category_id:string,asset_sub_category_name:string,asset_sub_category_enabled:string,asset_sub_category_discription:string) {
  var body = {
    asset_category_id : asset_category_id,
    asset_category : asset_category_name,
    asset_sub_category_id:asset_sub_category_id,
    asset_sub_category_name: asset_sub_category_name,
    asset_sub_category_discription:asset_sub_category_discription,
    asset_sub_category_enabled: asset_sub_category_enabled  
  };
   return this.http.post(this.rootURL + '/AssetSubCategory/UpdateAssetSubCategory', body);
}


deleteAssetSubCategory(asset_sub_category_id:number)
{
  return this.http.delete(this.rootURL+'/AssetSubCategory/DeleteAssetSubCategory?asset_sub_category_id='+asset_sub_category_id);
}

editAssetSubCategory(asset_sub_category_id:number)
{
  return this.http.get(this.rootURL+'/AssetSubCategory/EditAssetSubCategory?asset_sub_category_id='+asset_sub_category_id);
}

getActiveAssetSubCategory(){
  return this.http.get<AssetSubCategory[]>(this.rootURL + '/ActiveData/ActiveAssetSubCategoryList');
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

getActiveTimeZone(){
  return this.http.get<AssetSubCategory[]>(this.rootURL + '/ActiveData/ActiveTimeZoneList');
}
// End Time Zone

//Start TicketCategory section
listTicketCategory:TicketCategory[];
getAllTicketCategory(){
  return this.http.get<TicketCategory[]>(this.rootURL + '/TicketCategory/TicketCategoryList');
}

formModelTicketCategory = this.fb.group({
    ticket_category_id :  ['', Validators.required],
    ticket_category_name : ['', Validators.required],
    ticket_category_enabled : ['', Validators.required],
    ticket_category_discription : ['', Validators.required]
});

addTicketCategory() {
  var body = {
    ticket_category_name: this.formModelTicketCategory.value.ticket_category_name,
    ticket_category_discription:this.formModelTicketCategory.value.ticket_category_discription,
    ticket_category_enabled: this.formModelTicketCategory.value.ticket_category_enabled
  };
  return this.http.post(this.rootURL + '/TicketCategory/CreateTicketCategory', body);
}

updateTicketCategory(ticket_category_id : string,ticket_category_name :string ,ticket_category_enabled : string,ticket_category_discription:string) {
  var body = {
    ticket_category_id : ticket_category_id,
    ticket_category_name : ticket_category_name,
    ticket_category_enabled :  ticket_category_enabled,
    ticket_category_discription : ticket_category_discription
  };
  console.log("In the body data");  
  console.log(body);
  return this.http.post(this.rootURL + '/TicketCategory/UpdateTicketCategory', body);
}

deleteTicketCategory(ticket_category_id:number)
{
  return this.http.delete(this.rootURL+'/TicketCategory/DeleteTicketCategory?ticket_category_id='+ticket_category_id);
}

editTicketCategory(ticket_category_id:number)
{
  return this.http.get(this.rootURL+'/TicketCategory/EditTicketCategory?ticket_category_id='+ticket_category_id);
}
getActiveTicketCategory(){
  return this.http.get<TicketCategory[]>(this.rootURL + '/ActiveData/ActiveTicketCategoryList');
}
// End Ticket Category Section

//Start Ticket Sub Category section
listTicketSubCategory:TicketSubCategory[];
getAllTicketSubCategory(){
  return this.http.get<TicketSubCategory[]>(this.rootURL + '/TicketSubCategory/TicketSubCategoryList');
}

formModelTicketSubCategory = this.fb.group({
    ticket_category_id :   ['', Validators.required],
    ticket_category :   ['', Validators.required],
    ticket_sub_category_id :  ['', Validators.required],
    ticket_sub_category_name :  ['', Validators.required],
    ticket_sub_category_enabled :  ['', Validators.required],
    ticket_sub_category_discription :  ['', Validators.required]
});

addTicketSubCategory() {
  var body = {
    ticket_category_id : this.formModelTicketSubCategory.value.ticket_category,
    ticket_sub_category_name :  this.formModelTicketSubCategory.value.ticket_sub_category_name,
    ticket_sub_category_enabled :  this.formModelTicketSubCategory.value.ticket_sub_category_enabled,
    ticket_sub_category_discription :  this.formModelTicketSubCategory.value.ticket_sub_category_discription,
  };
  return this.http.post(this.rootURL + '/TicketSubCategory/CreateTicketSubCategory', body);
}


updateTicketSubCategory(ticket_category_id : string, ticket_sub_category_id :string, ticket_sub_category_name:string,
  ticket_sub_category_enabled:string,ticket_sub_category_discription:string) {
  var body = {
    ticket_category_id : ticket_category_id,
    ticket_sub_category_id : ticket_sub_category_id, 
    ticket_sub_category_name :  ticket_sub_category_name ,
    ticket_sub_category_enabled : ticket_sub_category_enabled ,
    ticket_sub_category_discription :  ticket_sub_category_discription,
  };
  console.log(body);
  return this.http.post(this.rootURL + '/TicketSubCategory/UpdateTicketSubCategory', body);
}
deleteTicketSubCategory(ticket_sub_category_id:number)
{
  return this.http.delete(this.rootURL+'/TicketSubCategory/DeleteTicketSubCategory?ticket_sub_category_id='+ticket_sub_category_id);
}

editTicketSubCategory(ticket_sub_category_id:number)
{
  return this.http.get(this.rootURL+'/TicketSubCategory/EditTicketSubCategory?ticket_sub_category_id='+ticket_sub_category_id);
}
getActiveTicketSubCategory(ticket_category_id:number){
  return this.http.get<TicketSubCategory[]>(this.rootURL + '/ActiveData/ActiveTicketSubCategoryList?ticket_category_id='+ticket_category_id);
}
// End Ticket Sub Category Section

}
