import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModulesModule } from '@nx-angular/modules';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app.router-module';
import { TranslationComponent } from './translation.component';

@NgModule({
  imports: [
    AppRouterModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    ModulesModule,
  ],
  declarations: [
    AppComponent,
    TranslationComponent,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {}
