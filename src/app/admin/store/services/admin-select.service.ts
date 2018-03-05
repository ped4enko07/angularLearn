import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as fromAdmin from './../reducers/index';
import {select, Store} from '@ngrx/store';

@Injectable()
export class AdminSelectService {
  public layoutShowSidenav$: Observable<boolean>;

  constructor(private store: Store<fromAdmin.State>) {
    this.layoutShowSidenav$ = this.store.pipe(select(fromAdmin.getLayoutShowSidenav));
  }
}
