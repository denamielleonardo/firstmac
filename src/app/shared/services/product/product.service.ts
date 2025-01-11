import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MockProducts } from 'src/app/util';
import { IProduct } from '../../model/product/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = MockProducts;

  // Mock API endpoint is not provided on the email,
  // I created a mock json that consists of 10 random products
  // And turned it into mock api request.
  getProducts(): Observable<IProduct[]> {
    return of(this.products);
  }
}
