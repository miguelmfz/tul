import { createAction, props } from '@ngrx/store';
import { Category } from 'src/app/shared/models/category.model';


export const setCategories = createAction('[Categories] setCategories',props<{ categories:Category[] }>());
export const unSetCategories = createAction('[Auth] unSetUser');