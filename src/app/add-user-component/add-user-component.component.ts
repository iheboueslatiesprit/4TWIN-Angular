import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user-component',
  templateUrl: './add-user-component.component.html',
  styleUrls: ['./add-user-component.component.css']
})
export class AddUserComponentComponent implements OnInit {

  constructor() { }
  AddUserForm: FormGroup ;

  ngOnInit(): void {
    this.AddUserForm = new FormGroup({
      firstName: new FormControl ('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*')]),
      lastName: new FormControl ('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*')]),
      email: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z0-9._-]+@gmail.com')]),
      categorie: new FormControl({value:'Customer',disabled: true}),
      password: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{8,}?')])
    });
  }


  onSubmit(): void{

  }
//  BECH TAAMEL COMPOSENT CHILD-ERROR FIH NG-IF FEL TEMPLATE FORM W YE9BEL TEXT 

  get myFirstName(){
    return this.AddUserForm.get('firstName');
  }
  get myLastName(){
    return this.AddUserForm.get('lastName');
  }
  get myEmail(){
    return this.AddUserForm.get('email');
  }
  get myPassword(){
    return this.AddUserForm.get('password');
  }
}
