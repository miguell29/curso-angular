import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  loading = false;
  tracks: any = [];
  constructor( private activatedRoute: ActivatedRoute
              ,private spotify:SpotifyService
  ) {
    this.activatedRoute.params.subscribe(
      params => {
        this.GetArtista(params['id']);
        this.GetTopTracks(params['id']);
      }
    )
  }

  ngOnInit(): void {
  }

  GetArtista(id:string){
    this.loading = true;
    this.spotify.GetArtist(id).subscribe(
      artista => {
        this.artista = artista
        this.loading = false;
      },
      error => {
        console.log(error);
      }
    )
  }
  GetTopTracks (id: string){
    this.spotify.GetTopTracks(id).subscribe(
      tracks => {
        this.tracks = tracks;
      },
      error => {
        console.log(error);
      }
    )
  }

}
