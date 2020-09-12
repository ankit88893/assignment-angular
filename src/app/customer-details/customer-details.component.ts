import { Component, OnInit } from '@angular/core';
import {Customer} from '../model/customer'
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent  {

  constructor() { }



  customer:Customer=new Customer('rahul gandhi',1000);
  // customer2:Customer=new Customer('ayushi dubey',2000);
  

    link ="http://joinindianarmy.nic.in/Authentication.aspx";
  // user3:User=new User('customer3',3000);
  // user4:User=new User('customer4',4000);



}
