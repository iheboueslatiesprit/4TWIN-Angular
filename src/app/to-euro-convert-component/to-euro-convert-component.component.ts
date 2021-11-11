import { Component, Input, OnInit, Output, SimpleChange, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-euro-convert-component',
  templateUrl: './to-euro-convert-component.component.html',
  styleUrls: ['./to-euro-convert-component.component.css']
})
export class ToEuroConvertComponentComponent implements OnInit {

  constructor() { }
  @Input() n;
  montant : number ;
  @Output() m;
  @Output() emitter = new EventEmitter<number> () ;
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChange) {
    this.montant = this.n*3 ;
    this.m=this.montant;
   // this.emitter.emit(this.montant) ;
  }
  sendValue(){
    this.emitter.emit(this.montant);
  }

}
