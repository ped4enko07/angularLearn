import { Action } from '@ngrx/store';

export enum AdminLayoutActionTypes {
  OpenSidenav = '[AdminLayout] Open Sidenav',
  CloseSidenav = '[AdminLayout] Close Sidenav',
}

export class OpenSidenav implements Action {
  readonly type = AdminLayoutActionTypes.OpenSidenav;
}

export class CloseSidenav implements Action {
  readonly type = AdminLayoutActionTypes.CloseSidenav;
}

export type AdminLayoutActions = OpenSidenav | CloseSidenav;
