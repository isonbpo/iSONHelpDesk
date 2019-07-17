import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Global } from './global.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ViewServicesService {
  
  formData :Global;
  constructor(private fb: FormBuilder, private http:HttpClient) { }
  readonly rootURL = 'http://localhost:54277/api';

  //start department sections
  list:Global[];
  getCountry(){
    this.http.get(this.rootURL+'/Global/CountryList')
    .toPromise()
    .then(res=>this.list = res as Global[]);
  }

  listState:Global[];
  getState(country_id:number){
    this.http.get(this.rootURL+'/Global/StateList?country_id='+country_id)
    .toPromise()
    .then(res=>this.listState = res as Global[]);
    //return this.http.get(this.rootURL+'/Global/StateList?country_id='+country_id);
  }

  listCity:Global[];
  getCity(state_code:number){
    this.http.get(this.rootURL+'/Global/CityList?state_code='+state_code)
    .toPromise()
    .then(res=>this.listCity = res as Global[]);
    //return this.http.get(this.rootURL+'/Global/StateList?country_id='+country_id);
  }


  listTimezone:Global[];
  getTimezone(){
    this.http.get(this.rootURL+'/Global/TimezoneList')
    .toPromise()
    .then(res=>this.listTimezone = res as Global[]);
    //return this.http.get(this.rootURL+'/Global/StateList?country_id='+country_id);
  }


  listCreateByDate:Global[];
  getCreateByDate(){
    this.http.get(this.rootURL+'/Global/CreatedByDate')
    .toPromise()
    .then(res=>this.listCreateByDate = res as Global[]);
    //return this.http.get(this.rootURL+'/Global/StateList?country_id='+country_id);
  }

}
