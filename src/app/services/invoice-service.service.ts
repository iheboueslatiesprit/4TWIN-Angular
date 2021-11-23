import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from '../models/Invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceService {
  url = 'http://localhost:3000/invoices';

  constructor(private http: HttpClient ) { }

  getJsonList():Observable<Invoice[]>{
    return this.http.get<Invoice[]>(this.url);
  }
}
