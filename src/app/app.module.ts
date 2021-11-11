import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductTDComponentComponent } from './add-product-tdcomponent/add-product-tdcomponent.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddInvoiceComponentComponent } from './add-invoice-component/add-invoice-component.component';
import { EditInvoiceComponentComponent } from './edit-invoice-component/edit-invoice-component.component';
import { ListInvoiceComponentComponent } from './list-invoice-component/list-invoice-component.component';
import { AddUserComponentComponent } from './add-user-component/add-user-component.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { ConvertisseurComponentComponent } from './convertisseur-component/convertisseur-component.component';
import { ToEuroConvertComponentComponent } from './to-euro-convert-component/to-euro-convert-component.component'

const ROUTES: Routes = [
  {path : 'editinvoice/:id', component : EditInvoiceComponentComponent},
  {path: 'addUser', component: AddUserComponentComponent},
  {path: 'invoices', component: ListInvoiceComponentComponent},
  {path: 'convert', component: ConvertisseurComponentComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    AddProductTDComponentComponent,
    AddInvoiceComponentComponent,
    EditInvoiceComponentComponent,
    ListInvoiceComponentComponent,
    AddUserComponentComponent,
    ErrorComponentComponent,
    ConvertisseurComponentComponent,
    ToEuroConvertComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
