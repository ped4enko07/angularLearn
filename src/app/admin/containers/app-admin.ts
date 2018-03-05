import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PipeDecorator } from '../../core/decorators';
import { AdminSelectService } from '../store/services';
import { Store } from '@ngrx/store';

import * as fromAdmin from '../store/reducers/index';
import * as layout from '../store/actions/admin-layout.actions';

@Component({
  selector: 'app-admin-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-layout>
      <app-sidenav [open]='showSidenav$ | async'>
        <app-nav-item (navigate)="closeSidenav()" >
          Sign In
        </app-nav-item>
      </app-sidenav>

      <app-toolbar (openMenu)="openSidenav()">
        Book Collection
      </app-toolbar>

      <router-outlet></router-outlet>
    </app-layout>
  `,
})
export class AppAdminComponent {
  @PipeDecorator public getPipe: Function;
  public status: boolean;

  showSidenav$: Observable<boolean>;

  constructor(
    private selectService: AdminSelectService,
    private store: Store<fromAdmin.State>,
  ) {
    this.showSidenav$ = this.selectService.layoutShowSidenav$;

    this.showSidenav$.subscribe(data => {
      this.status = data;
      console.log('SHOW SIDENAV SUBSCRIBE', data);
    });
  }

  openSidenav() {
    this.store.dispatch(new layout.OpenSidenav());
  }

  closeSidenav() {
    this.store.dispatch(new layout.CloseSidenav());
  }
}
