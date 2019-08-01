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
  getGlobal(){
    return this.http.get<Global[]>(this.rootURL + '/Global/CreatedByDate');
  }
  
  
}
