import {MainPagesActionTypes, MainPagesActions} from '../actions/main-pages.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

export interface State extends EntityState<any> {
  error: any;
}

export const adapter: EntityAdapter<any> = createEntityAdapter<any>({
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
  error: null,
});

export function reducer(state = initialState, action: MainPagesActions): State {
  switch (action.type) {
    case MainPagesActionTypes.LoadMainPages : {
      return {
        ...state,
      };
    }

    case MainPagesActionTypes.LoadMainPagesSuccess : {
      return {
        ...adapter.addMany(action.payload.pages, state)
      };
    }

    case MainPagesActionTypes.LoadMainPagesFail : {
      return {
        ...state,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
