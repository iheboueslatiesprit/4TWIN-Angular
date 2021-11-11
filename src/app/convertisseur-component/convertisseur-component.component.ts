import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertisseur-component',
  templateUrl: './convertisseur-component.component.html',
  styleUrls: ['./convertisseur-component.component.css']
})
export class ConvertisseurComponentComponent implements OnInit {

  constructor() { }
  convertisseur: FormGroup ;
  montants: number[] = [];

  ngOnInit(): void {
    this.convertisseur = new FormGroup ({
      euro : new FormControl ('0', Validators.pattern('^[0-9]*$'))
    });
  }

  fillArray(a: number): void{
    this.montants.push(a);
  }



  onSubmit(): void {

  }
  get euro(){
    return this.convertisseur.get('euro');
  }

}
