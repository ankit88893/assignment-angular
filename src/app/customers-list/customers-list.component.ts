import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer'


@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  customers:Customer[]=[
    new Customer("ankit",100),
    new Customer("anuj",200),
    new Customer("ayushi",300)
  ];
  

}
