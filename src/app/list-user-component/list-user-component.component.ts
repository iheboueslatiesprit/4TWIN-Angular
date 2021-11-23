import { UserServiceService } from './../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-list-user-component',
  templateUrl: './list-user-component.component.html',
  styleUrls: ['./list-user-component.component.css'],
  providers: [UserServiceService],
})
export class ListUserComponentComponent implements OnInit {

  constructor(private myhttp: HttpClient ) { }

  ngOnInit(): void {
  }

}
