import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './services/auth.service';
// import { AuthGuard } from './services/auth-guard.service';
import { MaterialModule } from '../material';
import {AuthStoreModule} from './store/store.module';
import {LoginPageComponent} from './containers/login-page.components';
import {LoginFormComponent} from './components/login-form.component';
import {AuthGuard} from './services/auth.guard';

export const COMPONENTS = [LoginPageComponent, LoginFormComponent];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootAuthModule,
      providers: [AuthService, AuthGuard],
    };
  }
}

@NgModule({
  imports: [
    AuthModule,
    AuthStoreModule,
    RouterModule.forChild([{ path: 'login', component: LoginPageComponent }]),
  ],
})
export class RootAuthModule {}
