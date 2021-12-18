import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AlbumsComponent } from './albums/albums.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { UserPostsComponent } from './user-posts/user-posts.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AlbumsComponent,
    UserComponent,
    UserPostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
