import {StoreModule} from '@ngrx/store';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {featureName, reducers} from './reducers';
import {AuthEffects} from './effects/main-pages.effects';
import {AuthSelectService} from './services/main-pages-select.service';

@NgModule({
  imports: [
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [
    AuthSelectService
  ],
})
export class AuthStoreModule {
}
