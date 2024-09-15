import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {

  private token = 'BQBKY8s3bJvud5lqNT2MInDSy7ktzd7tJCZxyUsw2a1LI7zYQY-Sp5NM6w1SnBYm9R1DqH_t4Wz3isl6JhIgbJB7oLFKwRDw1cKXDBaH_6BFmMmqfGQ';
  constructor(private http: HttpClient) {

  }
  private GetQuery(query: string) {
    const url = 'https://api.spotify.com/v1' + query;
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.get(url, { headers });
  }
  GetNewReleases(): Observable<any> {
    const query = '/browse/new-releases';
    return this.GetQuery(query).pipe(map((data) => data['albums'].items));
  }
  GetArtists(parametro): Observable<any> {
    const query = '/search?q=' + parametro + '&type=artist';
    return this.GetQuery(query).pipe(map((data) => data['artists'].items));
  }
  GetArtist(id: string) {
    const query = `/artists/${id}`;
    return this.GetQuery(query);
  }

  GetTopTracks(id: string) {
    const query = `/artists/${id}/top-tracks`;
    return this.GetQuery(query).pipe(map((item) => item['tracks']));
  }
}
