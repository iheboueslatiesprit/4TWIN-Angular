import { Invoice } from './../models/Invoice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-invoice-component',
  templateUrl: './list-invoice-component.component.html',
  styleUrls: ['./list-invoice-component.component.css']
})
export class ListInvoiceComponentComponent implements OnInit {
  invoiceNumber : number ;
  editing : boolean ;
  invoice : Invoice ;
  invoices =[
    { idInvoice: 1, discountAmount: 20, billAmount: 500, dateBill:
    "14/07/2021" , Status : true},
    { idInvoice: 2, discountAmount: 10, billAmount: 1000, dateBill:
    "02/10/2020" , Status : false},
    { idInvoice: 3, discountAmount: 50, billAmount: 200, dateBill:
    "15/12/2021" , Status : false},
    ]
  constructor() { }

  ngOnInit(): void {
    this.editing = false ;
  }


   supprimer( index : number) {
    this.invoices.splice(index , 1 ) ;
  } 
   edit ( index : number) {
    this.editing = true ;
    this.invoiceNumber = index ;
    this.invoice = this.invoices[index] ;
  }
  update ( o : Invoice ) {
    this.invoices[this.invoiceNumber] = o ;
    console.log(this.invoices[this.invoiceNumber].idInvoice);
    this.editing = false ;
  }
    
}
