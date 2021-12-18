import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { Albums } from '../interface/albums.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albumsGroup  = []

  constructor(private service : ServiceService) { }

  ngOnInit(): void {

    this.albums()
  }

  albums(){

    this.service.getAlbums().pipe()  
    .subscribe({
      next : (res) => {

        res.forEach(
           r => {
             if( !this.albumsGroup[r.userId]){
               this.albumsGroup[r.userId] = []
             }

             this.albumsGroup[r.userId].push(r)
           }
        )

        this.service.getUser().subscribe({
          next : (res) =>{
                 res.forEach(
                r => {
                  if (this.albumsGroup.indexOf(r.id)) {
                          
                      this.albumsGroup[r.id].push({userName : r.username})
                          
                  }


                }
              )

              
          }
        })

        console.log(this.albumsGroup[1][0]);
        
        

      }
    })

  }

}
