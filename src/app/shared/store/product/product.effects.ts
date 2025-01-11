import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductService } from '../../services/product/product.service';
import { loadProducts, loadProductsFailure, loadProductsSuccess } from './product.actions';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private productService: ProductService) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      mergeMap(() => {
        return this.productService.getProducts().pipe(
          map((products) => {
            return loadProductsSuccess({ products });
          }),
          catchError((error) => {
            return of(loadProductsFailure({ error }));
          })
        );
      })
    )
  );
}
