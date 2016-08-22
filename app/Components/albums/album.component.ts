import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { SpotifyService } from './../../Services/spotify.service'
import { ROUTER_DIRECTIVES } from "@angular/router";
declare var $: any;
@Component({
    moduleId: module.id,
    selector: 'albums',
    templateUrl: './album.template.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [SpotifyService]
})
export class AlbumComponent implements OnInit{

    searchType: string = 'Artist'
    contentIsLoading: boolean = false;
    artists: Object[];
    componentIsLiked: boolean;
    constructor(private _elRef: ElementRef, private _spotifyService: SpotifyService){}

    ngOnInit(){
        var keyups = Observable.fromEvent($(this._elRef.nativeElement).find('#searchMusic'), "keyup")
        .map(e => e.target.value)
        .debounceTime(500)
        .filter(e => e != '')
        .distinctUntilChanged();
        keyups.subscribe(res => {   
            this.contentIsLoading = true;
                this._spotifyService.searchMusic(res)
                    .subscribe(resList => {
                        let fetchedArtist = resList.artists.items;
                        this.artists = fetchedArtist;
                        setTimeout(()=>this.contentIsLoading = false, 200);
                        console.log(resList);
                });
        }); 
    }

    likeMusic(){
        console.log('component: pressed');
        this.componentIsLiked = !this.componentIsLiked;
    }
}