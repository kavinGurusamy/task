import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Albums } from './interface/albums.model';
import { UserPosts } from './interface/user-posts.model';
import { User } from './interface/user.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient : HttpClient) { }


  getUser() : Observable<Array<User>>{
    return this.httpClient.get<Array<User>>(environment.userUrl)
  }

  getUserPost(userId : number) : Observable<Array<UserPosts>>{
    return this.httpClient.get<Array<UserPosts>>(environment.userpostUrl + '/' + userId + "/posts" )
  }

  getAlbums() : Observable<Array<Albums>>{
    return this.httpClient.get<Array<Albums>>(environment.albumsUrl)
  }


}
