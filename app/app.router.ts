import {provideRouter, RouterConfig } from '@angular/router';
import {ArtistComponent} from './Components/artist/artist.component'
import {AlbumComponent} from './Components/albums/album.component'
import {TracksComponent} from './Components/tracks/tracks.component'
import {AboutComponent} from './Components/about/about.component'


const routes: RouterConfig = [
    { path: '', component: AlbumComponent },
    { path: 'artist', component: ArtistComponent },
    { path: 'about', component: AboutComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: 'tracks/:id', component: TracksComponent }
]

export const appRouteProvider = [
    provideRouter(routes)
]
