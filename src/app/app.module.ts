import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {reducers, metaReducers} from './store/reducers';
import {CustomRouterStateSerializer} from './store/utils';

import {environment} from '../environments/environment';
import {routes} from './routes';
import {AppComponent} from './core/containers/app';
import {CoreModule} from './core/core.module';
import {AuthModule} from './auth/auth.module';
import {MainPagesModule} from './main-pages/main-pages.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: false}),

    StoreModule.forRoot(reducers, {metaReducers}),

    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    }),

    StoreDevtoolsModule.instrument({
      name: 'Store DevTools',
      logOnly: environment.production,
    }),

    EffectsModule.forRoot([]),
    CoreModule.forRoot(),
    AuthModule.forRoot(),
    MainPagesModule.forRoot(),
  ],
  providers: [
    {provide: RouterStateSerializer, useClass: CustomRouterStateSerializer},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
