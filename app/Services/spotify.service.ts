import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from "rxjs/Rx";
@Injectable()
export class SpotifyService {
    constructor(private _http: Http) { }

    searchMusic(artist: string, type = 'artist') {
        console.log('searching with: ', artist);
        const header = new Headers({ 'Content-Type': 'application/json' })
        return this._http.get('https://api.spotify.com/v1/search?query=' + artist + '&offset=0&limit=20&type=' + type + '&market=US')
            .map(res => res.json())
    }

    searchByArtist(id: string) {
        const header = new Headers({ 'Content-Type': 'application/json' })
        return this._http.get('https://api.spotify.com/v1/artists/' + id)
            .map(res => res.json())
    }

    searchByAlbums(id: string) {
        const header = new Headers({ 'Content-Type': 'application/json' })
        return this._http.get('https://api.spotify.com/v1/artists/' + id + '/albums')
            .map(res => res.json())
    }

    searchTracks(tracksId: string) {
        console.log('searching with: ', tracksId);
        const header = new Headers({ 'Content-Type': 'application/json' })
        return this._http.get('https://api.spotify.com/v1/albums/' + tracksId)
            .map(res => res.json())
    }

}