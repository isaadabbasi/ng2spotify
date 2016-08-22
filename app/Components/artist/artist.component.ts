import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { SpotifyService } from '../../Services/spotify.service';

@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: './artist.template.html',
    directives:[ROUTER_DIRECTIVES],
    providers: [SpotifyService]
})

export class ArtistComponent implements OnInit{

    id: string;
    artist: Object[];
    albums: Object[];
    // albums: string[]
    constructor(private _router: ActivatedRoute, private _spotifyService: SpotifyService){}
    ngOnInit(){
        this._router.params.map(params => params['id'])
            .subscribe((id: string)=> {
                this._spotifyService.searchByArtist(id)
                    .subscribe(artist => {
                        this.artist = artist;
                        console.log('artist: ', this.artist);
                    })
                this._spotifyService.searchByAlbums(id)
                    .subscribe(albums => {
                        this.albums = albums;
                        console.log('ALBUMS: ', this.albums);
                    })
        })
    }
}