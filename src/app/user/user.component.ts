import { Component, Input, OnInit } from '@angular/core';
import { User } from '../interface/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input('inputUser') users : Array<User>


  constructor() { }

  ngOnInit(): void {
  }

}
