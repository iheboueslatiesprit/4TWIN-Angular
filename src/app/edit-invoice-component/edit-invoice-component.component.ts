import { Invoice } from './../models/Invoice';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {EventEmitter, Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-edit-invoice-component',
  templateUrl: './edit-invoice-component.component.html',
  styleUrls: ['./edit-invoice-component.component.css']
})
export class EditInvoiceComponentComponent implements OnInit {
  updateForm : FormGroup ;
  @Input() invoice : Invoice ;
  constructor() { }
  @Output() emitter = new EventEmitter<Invoice> () ;
 
  ngOnInit(): void {
    this.updateForm = new FormGroup ({
      idInvoice : new FormControl (this.invoice.idInvoice,Validators.required),
      discount : new FormControl (this.invoice.discountAmount,Validators.required),
      bill : new FormControl (this.invoice.billAmount,Validators.required),
      dateBill : new FormControl (this.invoice.dateBill, Validators.required),
      status : new FormControl (this.invoice.Status, Validators.required)
    })
  }
  onSubmit(){
    this.invoice.idInvoice = this.updateForm.get('idInvoice').value;
    this.invoice.discountAmount = this.updateForm.get('discount').value;
    this.invoice.billAmount = this.updateForm.get('bill').value;
    this.invoice.dateBill = this.updateForm.get('dateBill').value;
    this.invoice.Status = this.updateForm.get('status').value;
    this.emitter.emit(this.invoice) ;
  }



  
  get myIdInvoice(){
    return this.updateForm.get('idInvoice');
  }
  get myDiscount ( ){
    return this.updateForm.get('discount');
  }
  get myBill (){
    return this.updateForm.get('bill');
  }
  get myDateBill(){
    return this.updateForm.get('dateBill');
  }
  get myStatus(){
    return this.updateForm.get('status');
  }
}
