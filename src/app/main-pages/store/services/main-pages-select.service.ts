import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as fromMainPages from './../reducers/index';
import {select, Store} from '@ngrx/store';

@Injectable()
export class MainPagesSelectService {

  constructor(private store: Store<fromMainPages.State>) {

  }
}
