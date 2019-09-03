import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { GlobalService } from 'src/app/shared/global.service';
import { MasterPagesService } from 'src/app/masterPages/shared/master-pages.service';
import { ContactsViewServiceService } from 'src/app/view/contactsView/shared/contacts-view-service.service';


@Component({
  selector: 'app-contacts-general',
  templateUrl: './contacts-general.component.html',
  styleUrls: ['./contacts-general.component.scss']
})
export class ContactsGeneralComponent implements OnInit {
  createContactForm: FormGroup;
  countries: {};
  states: {};
  cities: {};
  timezones:{};
  ActiveDepartments:{};
  ActiveDesignations:{};
  ActiveTeams:{};
  ActiveRoles:{};
  contactType:{};
  contactTitle:{};
  zone:{};
  createDateAndBy:{};


  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private Service:GlobalService, private MPService:MasterPagesService, private ContactService:ContactsViewServiceService){}

  ngOnInit() {
    this.getCountryList();
    this.getMasterList();
    this.getTimezoneList();
    
    // this.createContactForm = this.formBuilder.group({
    //   country:'',
    //   state: '',
    //   city: '',
    //   timezone : '',
    //   department_name : '',
    //   designation : '',
    //   team:'',
    //   role:'',
    //   //role:new FormControl(''),
    //   dateJoined: ''
      
    // });

    this.getContactTypeList('CNTTYPE');
    this.getContactTitleList('TITLE');
    this.getZoneList('CUSTZONE');
    this.getCreateByAndDate();
  
    this.formGroup = this.formBuilder.group({
      dateJoined: ''
    });
  }

  

getCountryList()
{
  this.Service.getCountry().subscribe(
    data => this.countries = data
  );
}

onChangeCountry(country_id: number) {
  if (country_id) {
    this.Service.getState(country_id).subscribe(
      data => {
        this.states = data;
        this.cities = null;
      }
    );
  } else {
    this.states = null;
    this.cities = null;
  }
}

onChangeState(state_code: number) {
  if (state_code) {
    this.Service.getCities(state_code).subscribe(
      data => this.cities = data
    );
  } else {
    this.cities = null;
  }
}

getTimezoneList()
{
  this.Service.getTimezone().subscribe(
    data => this.timezones = data
  );
}

getMasterList()
{
  this.MPService.getActiveDepartment().subscribe(
    data => this.ActiveDepartments = data
  );
  this.MPService.getActiveDesignation().subscribe(
    data => this.ActiveDesignations = data
  );
  this.MPService.getActiveTeam().subscribe(
    data => this.ActiveTeams = data
  );
  this.MPService.getActiveRole().subscribe(
    data => this.ActiveRoles = data
  );
}

getContactTypeList(dynamicParameter)
{
  this.Service.getGlobalDropDown(dynamicParameter).subscribe(
    data=>{
      this.contactType = data
      console.log("data");
      console.log(data);
  }
  );
}
getContactTitleList(dynamicParameter)
{
  this.Service.getGlobalDropDown(dynamicParameter).subscribe(
    data=>{
      this.contactTitle = data
  }
  );
}

getZoneList(dynamicParameter)
{
  
  this.Service.getGlobalDropDown(dynamicParameter).subscribe(
    data=>{
      this.zone = data
    console.log(data);
  }
  );
}

getCreateByAndDate()
{
  this.Service.getCreateByDate().subscribe(
    data => {
      this.createDateAndBy = data
      console.log(data);
      
    }
  );
}

onSubmit() {
  this.ContactService.addContact().subscribe(
    res=>
      {
      });
}

}
