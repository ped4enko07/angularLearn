import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material';
import {MainPagesComponent} from './containers/main-pages.component';


export const COMPONENTS = [MainPagesComponent];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})

export class MainPagesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootMainPagesModule,
      providers: [],
    };
  }
}

@NgModule({
  imports: [
    MainPagesModule,
    RouterModule.forChild([{ path: '', component: MainPagesComponent}]),
  ],
})
export class RootMainPagesModule {}
