import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  providers: [
    { provide: 'window', useValue: (global as any).window },
    { provide: 'console', useValue: (global as any).console },
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
