import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as  fromRoot from '../../../store/reducers';
import * as fromLayout from './admin-layout.reducer';

export const featureName = 'admin';

export interface AdminState {
  layout: fromLayout.State;
}

export interface State extends fromRoot.State {
  admin: AdminState;
}

export const reducers: ActionReducerMap<AdminState> = {
  layout: fromLayout.reducer,
};

/**
 * Root selector
 */
export const getAdminState = createFeatureSelector<AdminState>(featureName);

/**
 * Layout Selectors
 */
export const getLayoutState = createSelector(getAdminState, (state: AdminState) => state.layout);
export const getLayoutShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav);
