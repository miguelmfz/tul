import { createReducer, on } from '@ngrx/store';
import { Cart } from 'src/app/shared/models/cart.model';
import { Product } from 'src/app/shared/models/products.model';
import { addProductToCart, setProductsByCategory } from './cart.action';

export interface State {
    products: Product[]; 
    productOfCart: Cart[]; 
}

export const initialState: State = {
   products: [] = [],
   productOfCart:[] = []
}

const _cartReducer = createReducer(initialState,
    on(setProductsByCategory,(state,{products})  => ({ ...state, products:[...products]  })),
    on(addProductToCart,(state,{cart})  => ({...state,productOfCart:[...state.productOfCart, cart]}) )/*,
    on(updateProductToCart,(state,{product})  => ({
        ...state,
    productOfCart: {
      ...state.productOfCart,
      [product.id]: {
        ...state.productOfCart.filter(pro=>pro.id==product.id),
        // Violation, Date is not serializable
        quantity: 3,
      },
    },
    }) )*/

);

export function cartReducer(state, action) {
    return _cartReducer(state, action);
}