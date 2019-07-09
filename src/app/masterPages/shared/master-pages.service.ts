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
    this.http.get(this.rootURL+'/department/DepartmentList')
    .toPromise()
    .then(res=>this.list = res as Department[]);
  }
  
  formModel = this.fb.group({
    dept_id: ['', Validators.required],
    dept_name: ['', Validators.required],
    dept_enabled:['', Validators.required]
  });


  addDepartment() {
    var body = {
      dept_name: this.formModel.value.dept_name,
      dept_enabled: this.formModel.value.dept_enabled,
    };
    return this.http.post(this.rootURL + '/department/CreateDepartment', body);
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
      this.http.get(this.rootURL+'/designation/DesignationList')
      .toPromise()
      .then(res=>this.listDesig = res as Designation[]);
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
  this.http.get(this.rootURL+'/Team/TeamList')
  .toPromise()
  .then(res=>this.listTeam = res as Team[]);
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
  this.http.get(this.rootURL+'/Role/RoleList')
  .toPromise()
  .then(res=>this.listRole = res as Role[]);
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
  this.http.get(this.rootURL+'/AssetCategory/AssetCategoryList')
  .toPromise()
  .then(res=>this.listAssetCategory = res as AssetCategory[]);
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
  this.http.get(this.rootURL+'/Products/ProductsList')
  .toPromise()
  .then(res=>this.listProducts = res as Products[]);
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

//Start Products section
listProductType:ProductType[];
getAllProductType(){
  this.http.get(this.rootURL+'/ProductType/ProductTypeList')
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
  return this.http.post(this.rootURL + '/producttype/CreateProductType', body);
}

deleteProductType(product_type_id:number)
{
  return this.http.delete(this.rootURL+'/producttype/DeleteProductType?product_type_id='+product_type_id);
}

editProductType(product_type_id:number)
{
  return this.http.get(this.rootURL+'/producttype/EditProductType?product_type_id='+product_type_id);
}
// End Product Section

}
