import { createReducer, on } from '@ngrx/store';
import * as userActions from './user.actions';

export interface UserState {
  email: string;
  token: string;
  password: string;
}

export const initialState: Partial<UserState> = {};

export const userReducer = createReducer(
  initialState,
  on(userActions.signup, (state, { email, password }) => ({
    ...state,
    email,
    password,
  })),
  on(userActions.userInfo, (state, { token }) => ({
    ...state,
    token,
  }))
);
