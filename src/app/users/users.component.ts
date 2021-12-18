import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user :Array<User>

  constructor(private service : ServiceService) { }

  ngOnInit(): void {

     this.getUser()

  }

  getUser(){
         this.service.getUser().subscribe({
           next : (res) => {
             this.user = res
             console.log(this.user);
             
           }
         })
    
  }

}
