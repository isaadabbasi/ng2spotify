import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

import { SpotifyService } from '../../Services/spotify.service';

@Component({
    moduleId: module.id,
    selector: 'tracks',
    templateUrl: 'tracks.template.html',
    directives:[ROUTER_DIRECTIVES],
    providers: [SpotifyService]
})
export class TracksComponent implements OnInit {
    tracks: Object[];
    constructor(private _router: ActivatedRoute, private _spotifyService: SpotifyService) { }
    ngOnInit() {
        this._router.params.map(params => params['id'])
            .subscribe((id: string) => {
                console.log('id: ',id);
                this._spotifyService.searchTracks(id)
                    .subscribe(tracks => {
                        this.tracks = tracks;
                        console.log('TRACKS: ', this.tracks);
                    })
            })
    }

}