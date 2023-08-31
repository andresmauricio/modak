import { createAction, props } from '@ngrx/store';
import { SingUp, UserInfo } from 'src/app/modules/authentication/@types';

const signup = createAction('[User] Set Signup', props<SingUp>());
const userInfo = createAction('[User] Set User Info', props<UserInfo>());

export { signup, userInfo };
