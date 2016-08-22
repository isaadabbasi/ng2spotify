import { bootstrap }    from '@angular/platform-browser-dynamic';
import { appRouteProvider } from './app.router'
import { disableDeprecatedForms, provideForms } from '@angular/forms'
import { HTTP_PROVIDERS } from '@angular/http'
import { AppComponent } from './app.component';
bootstrap(AppComponent, [
    appRouteProvider,
    disableDeprecatedForms(),
    provideForms(),
    HTTP_PROVIDERS
]);
