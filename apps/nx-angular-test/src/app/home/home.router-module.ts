import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeModule } from './home.module';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '',
      component: HomeComponent,
    }]),
    HomeModule,
  ],
})
export class HomeRouterModule { }
