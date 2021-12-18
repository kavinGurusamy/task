import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path : 'users',
    component : UsersComponent
  },
  {
    path : 'albums',
    component : AlbumsComponent
  },
  {
    path : 'userpost/:userId',
    component : UserPostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
