import { Component } from '@angular/core';
import { NavbarComponent } from './Components/navbar/navbar.component'
import { AlbumComponent } from './Components/albums/album.component';
import { ArtistComponent } from './Components/artist/artist.component';

import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <navbar></navbar>       
            <router-outlet></router-outlet>
    `,
    directives:[NavbarComponent, ROUTER_DIRECTIVES, AlbumComponent, ArtistComponent]
})
export class AppComponent {  }