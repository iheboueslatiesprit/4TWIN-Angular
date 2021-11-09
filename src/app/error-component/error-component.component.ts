import { Component, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ValidationErrors, Validator } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-error-component',
  templateUrl: './error-component.component.html',
  styleUrls: ['./error-component.component.css']
})
export class ErrorComponentComponent implements OnInit {

  constructor() { }
  @Output() emitter = new EventEmitter () ;
  @Input() error : ValidationErrors ;
  errors: string[] = [];
  ngOnInit(): void {
  }
  //ERREURES AFFICHES AVEC NG IF DANS TEMPLATE
  ngOnChanges(changes: SimpleChanges) {

    }






}
