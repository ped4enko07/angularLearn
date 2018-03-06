import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Authenticate} from '../models';
import * as fromAuth from '../store/reducers';
import * as Auth from '../store/actions/auth.actions';
import {AuthSelectService} from '../store/services/auth-select.service';
import {Observable} from 'rxjs/Observable';
import {PipeDecorator} from '../../core/decorators';

@Component({
  selector: 'app-login-page',
  template: `
    <app-login-form
      (submitted)="onSubmit($event)"
      [pending]="pending$ | async"
      [errorMessage]="error$ | async">
    </app-login-form>
  `,
  styles: [],
})
export class LoginPageComponent implements OnInit {
  @PipeDecorator public getPipe: Function;

  public pending$: Observable<any>;
  public error$: Observable<any>;

  constructor(private store: Store<fromAuth.State>, private selectService: AuthSelectService) {
    this.pending$ = this.getPipe(this.selectService.pending$);
    this.error$ = this.getPipe(this.selectService.error$);
  }

  ngOnInit() {
  }

  onSubmit($event: Authenticate) {
    this.store.dispatch(new Auth.Login($event));
  }
}
