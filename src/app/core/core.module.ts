import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from './containers/app';
import {NotFoundPageComponent} from './containers/not-found.page';
import {MaterialModule} from '../material';
import {RouterModule} from '@angular/router';

export const COMPONENTS = [
  AppComponent,
  NotFoundPageComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
    };
  }
}
