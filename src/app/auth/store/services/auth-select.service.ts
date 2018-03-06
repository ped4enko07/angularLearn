import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as fromAuth from './../reducers/index';
import {select, Store} from '@ngrx/store';
import {User} from '../../models';

@Injectable()
export class AuthSelectService {
  public pending$: Observable<boolean>;
  public error$: Observable<string>;
  public user$: Observable<User>;
  public loggedIn$: Observable<boolean>;

  constructor(private store: Store<fromAuth.State>) {
    this.pending$ = this.store.pipe(select(fromAuth.getLoginPagePending));
    this.error$ = this.store.pipe(select(fromAuth.getLoginPageError));
    this.user$ = this.store.pipe(select(fromAuth.getUser));
    this.loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));
  }
}
