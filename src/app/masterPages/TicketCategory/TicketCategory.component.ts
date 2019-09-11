import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort, MatTable} from '@angular/material';
import { MasterPagesService } from '../shared/master-pages.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { TicketCategory } from '../shared/ticket-category.model';
import { ToastrService } from 'ngx-toastr';
import { TicketCategoryDialogBoxComponent } from './ticket-category-dialog-box/ticket-category-dialog-box.component';



@Component({
  selector: 'app-ticketCategory',
  templateUrl: './ticketCategory.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})

export class TicketCategoryComponent implements OnInit {
  displayedColumns: string[] = ['TicketCategoryName', 'TicketCategoryDiscription', 'Enabled', 'Action','Id'];
  

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  
  dptlist: TicketCategory[];
  dataavailbale: Boolean = false;
  tempdpt: TicketCategory
  dataSource :any;
  

  constructor(private Service:MasterPagesService, private route:Router, public dialog: MatDialog,private toastr:ToastrService){}
  


  ngOnInit() {
    this.LoadData();
  }
  
  LoadData() {
    this.Service.getAllTicketCategory().subscribe(  
      res => {  
        this.dptlist = res;
        this.dataSource = new MatTableDataSource(this.dptlist);  
        this.dataSource.sort = this.sort;
        this.Service.formModelTicketCategory.reset();
      },
      err => {
        console.log(err);
      });
  }

  onSubmit() {
    this.Service.addTicketCategory().subscribe(
      res=>
        {
          this.toastr.success('Added Successfully','Ticket Category');
          this.LoadData();
        });
  }

  openDialog(action,obj) {
    
    obj.action = action;
      
    const dialogRef = this.dialog.open(TicketCategoryDialogBoxComponent, {
        width: '550px',
        data:obj
      });
      
      dialogRef.afterClosed().subscribe(result => {
        if(result.event == 'Update'){
          this.updateRowData(result.data);
        }
      });
    }
    
    updateRowData(row_obj){

      this.dataSource = this.dptlist.filter((value,key)=>{
        console.log(this.dataSource);
        if(value.ticket_category_id == row_obj.ticket_category_id){
          
           value.ticket_category_name = row_obj.ticket_category_name;
           value.ticket_category_enabled = row_obj.ticket_category_enabled;
           value.ticket_category_discription = row_obj.ticket_category_discription;
           this.Service.updateTicketCategory(value.ticket_category_id,value.ticket_category_name, value.ticket_category_enabled,value.ticket_category_discription).subscribe();                this.toastr.info('Updated Successfully','Ticket Sub Category');
        }
        this.LoadData();
      });
    }

  getError(el) {
    switch (el) {
      case 'ticket_category_name':
        if (this.Service.formModelTicketCategory.get('ticket_category_name').hasError('required')) {
          return 'Ticket Category is required';
        }
        break;
      case 'ticket_category_enabled':
        if (this.Service.formModelTicketCategory.get('ticket_category_enabled').hasError('required')) {
          return 'Status is required';
        }
        break;
      case 'ticket_category_discription':
          if (this.Service.formModelTicketCategory.get('ticket_category_discription').hasError('required')) {
            return 'Discription is required';
          }
        break;
      default:
        return '';
    }
  }  

}