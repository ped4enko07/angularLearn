import { AdminLayoutActionTypes, AdminLayoutActions } from '../actions/admin-layout.actions';

export interface State {
  showSidenav: boolean;
}

const initialState: State = {
  showSidenav: false,
};

export function reducer(
  state: State = initialState,
  action: AdminLayoutActions
): State {
  switch (action.type) {
    case AdminLayoutActionTypes.CloseSidenav:
      return {
        showSidenav: false,
      };

    case AdminLayoutActionTypes.OpenSidenav:
      return {
        showSidenav: true,
      };

    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
