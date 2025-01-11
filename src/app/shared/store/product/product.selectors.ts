import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IProductState } from '../../model/product/product.model';

export const selectProductState = createFeatureSelector<IProductState>('products');

export const getProducts = createSelector(
  selectProductState,
  (state: IProductState) => state.products
);

export const getSelectedProduct = createSelector(
  selectProductState,
  (state: IProductState) => state.selectedProduct
);
