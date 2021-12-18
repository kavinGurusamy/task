import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserPosts } from '../interface/user-posts.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  userId

  userPost : Array<UserPosts>

  constructor(private route : ActivatedRoute,private service : ServiceService) { }

  ngOnInit(): void {

    this.userId = this.route.snapshot.paramMap.get('userId')


    
     this.getUserPost(this.userId)
  }

  getUserPost(userId){
       
    this.service.getUserPost(userId).subscribe({
      next : (res) => {
        this.userPost = res
        
      }
    })
 

  }

}
