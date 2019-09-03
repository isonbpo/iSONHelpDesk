import { Injectable } from '@angular/core';
import { Global } from './global.model';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  formData:Global;
  constructor(private fb: FormBuilder, private http:HttpClient) { }
  readonly rootURL = 'http://localhost:54277/api';

  //start department sections
  list:Global[];
  getCreateByDate(){
    return this.http.get<Global[]>(this.rootURL + '/Global/CreatedByDate');
  }
  
  getCountry(){
    return this.http.get<Global[]>(this.rootURL + '/Global/CountryList');
  }

  getState(country_id:number){
    return this.http.get<Global[]>(this.rootURL + '/Global/StateList?country_id='+country_id);
  }

  getCities(state_code:number){
    return this.http.get<Global[]>(this.rootURL+'/Global/CityList?state_code='+state_code)
  }

  getTimezone(){
    return this.http.get<Global[]>(this.rootURL+'/Global/TimezoneList');
  }

  getGlobalDropDown(generaltype:string){
    return this.http.get<Global[]>(this.rootURL+'/Global/GlobalDropDown?generaltype='+generaltype);
  }

  getCurrencyList()
  {
    return this.http.get<Global[]>(this.rootURL+'/Global/CurrencyList');
  }

  getcaseStatusList()
  {
    return this.http.get<Global[]>(this.rootURL+'/Global/CaseStatusList');
  }
  
  
  getStatusReasonList(status_id:number)
  {
    return this.http.get<Global[]>(this.rootURL+'/Global/StatusReasonList?status_id='+status_id);
  }
}
