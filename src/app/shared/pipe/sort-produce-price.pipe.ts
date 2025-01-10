import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../model/product/product.interface';

@Pipe({
  name: 'sortProductPrice'
})
export class SortProductsPricePipe implements PipeTransform {

  transform(products: IProduct[], sortOrder: 'asc' | 'desc' = 'asc'): IProduct[] {
    return products.sort((a, b) => {
      // Calculate the discounted prices if there are discounts
      const priceA = a.discount > 0 ? a.price - a.discount : a.price;
      const priceB = b.discount > 0 ? b.price - b.discount : b.price;

      if (sortOrder === 'asc') {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });
  }
}
