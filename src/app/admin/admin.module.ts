import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';
import { AppAdminComponent } from './containers/app-admin';
import { HomeAdminComponent } from './containers/home-admin';
import { AdminStoreModule } from './store/store.module';
import { MaterialModule } from '../material';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule,
    AdminStoreModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppAdminComponent,
        children: [
          {
            path: 'pages',
            loadChildren: '../main-pages/main-pages.module#RootMainPagesModule',
          },
        ],
      },
    ]),
  ],
  declarations: [AppAdminComponent, HomeAdminComponent],
})
export class AdminModule {}
