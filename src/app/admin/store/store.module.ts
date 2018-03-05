import {StoreModule} from '@ngrx/store';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {featureName, reducers} from './reducers';
import {AdminSelectService} from './services';

@NgModule({
  imports: [
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([])
  ],
  providers: [
    AdminSelectService,
  ],
})
export class AdminStoreModule {
}
