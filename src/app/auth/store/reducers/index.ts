import {createSelector, createFeatureSelector} from '@ngrx/store';
import * as fromRoot from '../../../store/reducers';
import * as fromAuth from './auth.reducer';
import * as fromLoginPage from './login-page.reducer';

export const featureName = 'auth';

export interface AuthState {
  status: fromAuth.State;
  loginPage: fromLoginPage.State;
}

export interface State extends fromRoot.State {
  auth: AuthState;
}

export const reducers = {
  status: fromAuth.reducer,
  loginPage: fromLoginPage.reducer,
};

export const selectAuthState = createFeatureSelector<AuthState>(featureName);

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state: AuthState) => state.status
);
export const getLoggedIn = createSelector(
  selectAuthStatusState,
  fromAuth.getLoggedIn
);
export const getUser = createSelector(selectAuthStatusState, fromAuth.getUser);

export const selectLoginPageState = createSelector(
  selectAuthState,
  (state: AuthState) => state.loginPage
);
export const getLoginPageError = createSelector(
  selectLoginPageState,
  fromLoginPage.getError
);
export const getLoginPagePending = createSelector(
  selectLoginPageState,
  fromLoginPage.getPending
);
