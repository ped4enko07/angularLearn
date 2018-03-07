import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '../../../store/reducers';
import * as fromMainPages from './main-pages.reducer';

export const featureName = 'mainPages';

export interface MainPagesState {
  mainPages: fromMainPages.State;
}

export interface State extends fromRoot.State {
  mainPages: MainPagesState;
}

export const reducers = {
  pages: fromMainPages.reducer,
};

export const selectMainPagesState = createFeatureSelector<MainPagesState>(
  featureName,
);
