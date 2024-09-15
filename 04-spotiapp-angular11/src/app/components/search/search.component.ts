import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  artistas:any;
  loading:boolean;
  danger:boolean;
  constructor(private spotify:SpotifyService) { }

  ngOnInit(): void {
  }
  Buscar(parametro){
    this.loading = true;
    this.danger = false;
    console.log(parametro);
    this.spotify.GetArtists(parametro).subscribe(
      data =>{
        this.artistas = data;
        this.loading = false;
      },
      error =>{
        console.log(error);
        this.artistas = undefined;
        this.loading = false;
        this.danger = true;
      })
  }
}
