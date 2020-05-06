import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic([
    { provide: 'window', useValue: window },
    { provide: 'console', useValue: console },
  ])
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
});
