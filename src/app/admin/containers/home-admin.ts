import {Component, ChangeDetectionStrategy, OnInit, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {PipeDecorator} from '../../core/decorators';
import {AdminSelectService} from '../store/services';
import {Store} from '@ngrx/store';

import * as fromAdmin from '../store/reducers/index';
import * as layout from '../store/actions/admin-layout.actions';

@Component({
  selector: 'app-home-admin',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a routerLink="/home">HOME</a>
    <button (click)="toggleShow()">toggle</button>
    <h1>{{status}}</h1>
  `
})
export class HomeAdminComponent {
  @PipeDecorator
  public getPipe: Function;
  public status: boolean;

  showSidenav$: Observable<boolean>;

  constructor(private selectService: AdminSelectService,
              private store: Store<fromAdmin.State>) {
    this.showSidenav$ = this.selectService.layoutShowSidenav$;

    this.showSidenav$.subscribe(data => {
      this.status = data;
      console.log('SHOW SIDENAV SUBSCRIBE', data);
    });
  }

  toggleShow() {
    if (!this.status) {
      return this.store.dispatch(new layout.OpenSidenav());
    }

    this.store.dispatch(new layout.CloseSidenav());
  }
}
