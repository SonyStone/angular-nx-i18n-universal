import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Message } from '@nx-angular/api-interfaces';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'nx-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hello$ = isPlatformBrowser(this.platformId)
    ? this.http.get<Message>('/api/hello')
      .pipe(
        catchError((_) => of($localize`:@@no_backend:Backend is not working`))
      )
    : of('server')

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId,
  ) {}

  browser_api = { 
    window: {
      innerWidth: window.innerWidth,
    }
  };

  messages = {
    yes: $localize`:@@yes:yes`,
    no: $localize`:@@no:no`,
  }
}
