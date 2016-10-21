import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app/app.component'

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppComponent);