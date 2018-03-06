import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PipeDecorator } from '../../core/decorators';
import { AdminSelectService } from '../store/services';
import { Store } from '@ngrx/store';

import * as fromAdmin from '../store/reducers/index';
import * as Layout from '../store/actions/admin-layout.actions';
import * as Auth from '../../auth/store/actions/auth.actions';
import {AuthSelectService} from '../../auth/store/services/auth-select.service';

@Component({
  selector: 'app-admin-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-layout>
      <app-sidenav [open]='showSidenav$ | async'>
        <app-nav-item (navigate)="logout()" *ngIf="loggedIn$ | async">
          Sign Out
        </app-nav-item>
      </app-sidenav>

      <app-toolbar (openMenu)="openSidenav()">
        Admin
      </app-toolbar>

      <router-outlet></router-outlet>
    </app-layout>
  `,
})
export class AppAdminComponent {
  @PipeDecorator public getPipe: Function;

  public showSidenav$: Observable<boolean>;
  public loggedIn$: Observable<boolean>;

  constructor(
    private adminSelectService: AdminSelectService,
    private authSelectService: AuthSelectService,
    private store: Store<fromAdmin.State>,
  ) {
    this.showSidenav$ = this.getPipe(this.adminSelectService.layoutShowSidenav$);
    this.loggedIn$ = this.getPipe(this.authSelectService.loggedIn$);
  }

  openSidenav() {
    this.store.dispatch(new Layout.OpenSidenav());
  }

  closeSidenav() {
    this.store.dispatch(new Layout.CloseSidenav());
  }

  logout() {
    this.closeSidenav();

    this.store.dispatch(new Auth.Logout());
  }
}
