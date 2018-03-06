import { Routes } from '@angular/router';
import {NotFoundPageComponent} from './core/containers/not-found.page';
import {AuthGuard} from './auth/services/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: './shop/shop.module#ShopModule',
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundPageComponent },
];
