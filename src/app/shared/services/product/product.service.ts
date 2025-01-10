import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MockProducts } from 'src/app/util';
import { IProduct } from '../../model/product/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = MockProducts;

  getProducts(): Observable<IProduct[]> {
    return of(this.products);
  }
}
