import { ProduitServiceService } from './../services/produit-service.service';
import { Produit } from './../models/Produit';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-product-component',
  templateUrl: './list-product-component.component.html',
  styleUrls: ['./list-product-component.component.css']
})
export class ListProductComponentComponent implements OnInit {
  listProducts: Produit[];
  listProductsJson: Produit[];
  searchWord: any = '';
  searching: string = '';
  n: number;

  constructor(private ps: ProduitServiceService) {
   }

  ngOnInit(): void {
    this.listProducts = this.getProducts();
   // this.getProductsJson();
   // console.log(this.listProductsJson);
  }

  calcProduits(): number {
    this.n = 0 ;
    this.searching="";
    for (let index = 0; index < this.listProducts.length; index++) {
     if ( this.listProducts[index].libelle === this.searchWord ) {
      this.n++;
     }
    }
    this.searching= this.searchWord ;
    return this.n;
  }

  getProducts(): Produit[]{
    return this.ps.getAllProducts();
  }
  getProductsJson(){
  // this.ps.getAllProductsByJson().subscribe(res => {  this.listProductsJson = res ;
  //console.log(res); });
  }
}
