import {Action} from '@ngrx/store';
import {HttpErrorResponse} from '@angular/common/http';

export enum MainPagesActionTypes {
  LoadMainPages = '[MainPages] Load Main Pages',
  LoadMainPagesSuccess = '[MainPages] Load Main Pages Success',
  LoadMainPagesFail = '[MainPages] Load Main Pages Fail',
}

export class LoadMainPages implements Action {
  readonly type = MainPagesActionTypes.LoadMainPages;

  constructor(public payload: any) {
  }
}

export class LoadMainPagesSuccess implements Action {
  readonly type = MainPagesActionTypes.LoadMainPagesSuccess;

  constructor(public payload: {pages: any}) {
  }
}

export class LoadMainPagesFail implements Action {
  readonly type = MainPagesActionTypes.LoadMainPagesFail;

  constructor(public payload: HttpErrorResponse) {
  }
}


export type MainPagesActions =
  | LoadMainPages
  | LoadMainPagesSuccess
  | LoadMainPagesFail;
