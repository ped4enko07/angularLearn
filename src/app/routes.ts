import { Routes } from '@angular/router';
import {NotFoundPageComponent} from './core/containers/not-found.page';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: './shop/shop.module#ShopModule',
  },
  // {
  //   path: 'admin',
  //   loadChildren: './admin/admin.module#AdminModule',
  // },
  { path: '**', component: NotFoundPageComponent },
];
