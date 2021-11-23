export class Invoice {


idInvoice !: number;
discountAmount: number;
billAmount!: number;
dateBill !: string;
Status!: boolean;

constructor(idInvoice, discountAmount, billAmount, dateBill, Status){
this.idInvoice = idInvoice;
this.discountAmount = discountAmount;
this.billAmount = billAmount;
this.dateBill = dateBill;
this.Status = Status;
}

}