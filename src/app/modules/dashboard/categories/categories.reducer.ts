import { createReducer, on } from '@ngrx/store';
import { Category } from 'src/app/shared/models/category.model';
import { setCategories } from './categories.action';

export interface State {
    categories: Category[]; 
}

export const initialState: State = {
   categories: [],
}

const _categoriesReducer = createReducer(initialState,
    on(setCategories,(state,{categories})  => ({ ...state, categories: [...categories] })),

);

export function categoriesReducer(state, action) {
    return _categoriesReducer(state, action);
}