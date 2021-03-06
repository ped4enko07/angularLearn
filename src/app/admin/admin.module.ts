import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentsModule} from './components/components.module';
import {RouterModule} from '@angular/router';
import {AppAdminComponent} from './containers/app-admin';
import {HomeAdminComponent} from './containers/home-admin';
import {AdminStoreModule} from './store/store.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    AdminStoreModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppAdminComponent,
        children: [
          {
            path: '',
            component: HomeAdminComponent,
          }
        ]
      }
    ]),
  ],
  declarations: [
    AppAdminComponent,
    HomeAdminComponent,
  ]
})
export class AdminModule { }
