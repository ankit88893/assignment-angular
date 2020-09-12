import { Component, OnInit } from '@angular/core';
import {CustomerDetailsComponent} from '../customer-details/customer-details.component';
import { Customer } from '../model/customer';

@Component({
  selector: 'add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {

  constructor() { }


  customer:Customer=undefined;

  addCustomer(form:any){
    let data=form.value;
   let balance=data.balance;
    let customername=data.customername;
    this.customer=new Customer(customername,balance);
     console.log("added");
   }
 
}
