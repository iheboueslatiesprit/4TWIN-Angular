import { InvoiceServiceService } from './../services/invoice-service.service';
import { HttpClient } from '@angular/common/http';
import { Invoice } from './../models/Invoice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-invoice-component',
  templateUrl: './list-invoice-component.component.html',
  styleUrls: ['./list-invoice-component.component.css']
})
export class ListInvoiceComponentComponent implements OnInit {
  invoiceNumber: number ;
  editing: boolean ;
  invoice: Invoice ;
  invoicesJson: Invoice[] = [] ;
  invoices = [
    { idInvoice: 1, discountAmount: 20, billAmount: 500, dateBill:
    '14/07/2021' , Status : true},
    { idInvoice: 2, discountAmount: 10, billAmount: 1000, dateBill:
    '02/10/2020' , Status : false},
    { idInvoice: 3, discountAmount: 50, billAmount: 200, dateBill:
    '15/12/2021' , Status : false},
    ];
  constructor(private is: InvoiceServiceService) {
    
  }

  ngOnInit(): void {
    this.editing = false ;
    this.initJsonList();


  }

  initJsonList(): void{
    this.is.getJsonList().subscribe( (res) => {
              this.invoicesJson = res  ;
              console.log(res);
               });
  }


   //Unsaved changes
  supprimer( index: number) {
    this.invoicesJson.splice(index , 1 ) ;
  }
   edit( index: number) {
    this.editing = true ;
    this.invoiceNumber = index ;
    this.invoice = this.invoicesJson[index] ;
  }
  update( o: Invoice ) {
    this.invoicesJson[this.invoiceNumber] = o ;
    console.log('Updated '+this.invoicesJson[this.invoiceNumber].idInvoice);
    this.editing = false ;
  }

}
