import { ActionReducerMap } from '@ngrx/store';
import * as auth from './modules/auth/auth.reducer';


export interface AppState {
    user:auth.State
}

export const appReducers: ActionReducerMap<AppState> = {
    user: auth.authReducer,
}