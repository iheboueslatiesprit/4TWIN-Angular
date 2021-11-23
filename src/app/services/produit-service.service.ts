import { HttpClient } from '@angular/common/http';
import { Produit } from './../models/Produit';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Produits from 'produits.json' ;
@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {
  ProduitsJson: Observable<Produit[]> ;
  Produits: Produit[] =  [
    { idProduct: 1, code: 127, libelle: 'PC', prixunitaire : 2000, tauxTva : 10},
    { idProduct: 2, code: 128, libelle: 'TV', prixunitaire : 1000, tauxTva : 20},
    { idProduct: 3, code: 128, libelle: 'Table', prixunitaire : 200, tauxTva : 30},
    ];

    private produitsUrlJson: 'produits.json';

  constructor(private http: HttpClient) {
 //  this.getAllProductsByJson().subscribe(a => console.log(a));
//  this.ProduitsJson =  Produits ;
 // console.log(this.ProduitsJson);
  }

 getAllProducts(){
   return this.Produits;
 }
// getAllProductsByJson(): Observable<Produit[]>{
  // return this.http.get<Produit[]>(this.produitsUrlJson);
//  return this.ProduitsJson;
// }
}
