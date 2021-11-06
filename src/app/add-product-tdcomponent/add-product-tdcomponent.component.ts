import { Produit } from './../models/Produit';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product-tdcomponent',
  templateUrl: './add-product-tdcomponent.component.html',
  styleUrls: ['./add-product-tdcomponent.component.css']
})
export class AddProductTDComponentComponent implements OnInit {

produits : Array<Produit>;
produit : Produit ;
addProduitForm : FormGroup ; 
secondaire : FormGroup;
clear : boolean ;
categList: any[] = [
  ];
suivant : boolean ;

  constructor() { }

  ngOnInit(): void {
    this.addProduitForm =  new FormGroup ({
    idproduit: new FormControl("",[Validators.required]),
    code: new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z-0-9]{8}")]),
    libelle: new FormControl("",[Validators.required,Validators.minLength(3)]),
    prixunitaire: new FormControl("",[Validators.required,Validators.pattern("[1-9][0-9]*")]),
        secondaire : new FormGroup ({
          iddetailproduit: new FormControl("",Validators.required),
          datecreation: new FormControl("",Validators.required),
          datedernieremodification: new FormControl("",Validators.required),
          categorie: new FormControl("",Validators.required)
        }),
});
    this.produit= new Produit();
    this.suivant = false ;
    this.produits = [];
  }

  get f(){
    return this.addProduitForm.controls;
  }
  clickedSuivant(): void {
    this.suivant = true ;
  }
   

  addProduct() {
    console.log('pushing ...');
    this.produit.code= this.addProduitForm.get('code').value;
    this.produit.categProduit= this.addProduitForm.get('secondaire.categorie').value;
    this.produit.datecreation= this.addProduitForm.get('secondaire.datecreation').value;
    this.produit.idproduit= this.addProduitForm.get('idproduit').value;
    this.produit.libelle= this.addProduitForm.get('libelle').value;
    this.produit.prisunitaire= this.addProduitForm.get('prixunitaire').value;
    this.produit.iddetail= this.addProduitForm.get('secondaire.iddetailproduit').value;
    this.produit.datemodif= this.addProduitForm.get('secondaire.datedernieremodification').value;
    this.produits.push(this.produit);
    console.log(JSON.stringify(this.produits));
    this.addProduitForm.reset();
  }

  get mySecondaire(){ 
  return this.addProduitForm.get('secondaire');
  }
  get myCode() {
    return this.addProduitForm.get('code') ;
  }
  get myIdproduit() {
    return this.addProduitForm.get('idproduit') ;
  }
  get myLibelle() {
    return this.addProduitForm.get('libelle') ;
  }
  get myPrixUnitaire(){
    return this.addProduitForm.get('prixunitaire') ;
  }
  get myIdDetailProduit(){
    return this.addProduitForm.get('secondaire.iddetailproduit') ;
  }
  get myDateCreation( ){
    return this.addProduitForm.get('secondaire.datecreation');
  }
  get myDateModif(){
    return this.addProduitForm.get('secondaire.datedernieremodification');
  }
  get myCategorie(){
    return this.addProduitForm.get('secondaire.categorie');
  }
}
