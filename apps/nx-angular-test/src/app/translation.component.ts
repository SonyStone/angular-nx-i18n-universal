import { Component } from '@angular/core';

@Component({
  template: `
<ng-template>
  <ng-container i18n="@@yes">Yes</ng-container>
  <ng-container i18n="@@no">No</ng-container>
  <ng-container i18n="@@no_backend">Backend is not working</ng-container>
</ng-template>
  `,
})
export class TranslationComponent {}
