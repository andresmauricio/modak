import { createReducer, on } from '@ngrx/store';
import * as uiActions from './ui.actions';

export interface UIState {
  isLoading: boolean;
}

export const initialState: Partial<UIState> = {
  isLoading: false,
};

export const uiReducer = createReducer(
  initialState,
  on(uiActions.showLoading, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(uiActions.hiddenLoading, (state) => ({
    ...state,
    isLoading: false,
  }))
);
