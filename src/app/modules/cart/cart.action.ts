import { createAction, props } from '@ngrx/store';
import { Cart } from 'src/app/shared/models/cart.model';
import { Product } from 'src/app/shared/models/products.model';

export const setProductsByCategory = createAction('[ProductByCategory Component] setProductsByCategory',props<{products:Product[]}>());
export const addProductToCart = createAction('[addCart Component] addProductToCart',props<{cart:Cart}>());
