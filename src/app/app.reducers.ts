import { ActionReducerMap } from '@ngrx/store';
import * as auth from './modules/auth/auth.reducer';
import * as categories from './modules/dashboard/categories/categories.reducer';
import * as cart from './modules/cart/cart.reducer';

export interface AppState {
    user:auth.State
    categories:categories.State
    cart:cart.State
}

export const appReducers: ActionReducerMap<AppState> = {
    user: auth.authReducer,
    categories:categories.categoriesReducer,
    cart:cart.cartReducer
}