import { createReducer, on } from '@ngrx/store';
import { IProductState } from '../../model/product/product.model';
import { loadProductsSuccess, selectProduct } from './product.actions';

export const initialState: IProductState = {
  products: [],
  selectedProduct: null,
};

export const productReducer = createReducer(
  initialState,
  on(loadProductsSuccess, (state, { products }) => {
    return {
      ...state,
      products,
    };
  }),
  on(selectProduct, (state, { productId }) => {
    return {
      ...state,
      selectedProduct: state.products.find((product) => product.id === productId) || null,
    }
  })
);
