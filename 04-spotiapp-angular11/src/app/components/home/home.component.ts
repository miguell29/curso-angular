import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  info: any;
  loading = true;

  constructor(private spotify: SpotifyService) {
    this.spotify.GetNewReleases().subscribe(
      (data: any) => {
        this.info = data;
        this.loading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {}
}
