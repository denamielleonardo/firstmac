import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountedPrice'
})
export class DiscountedPricePipe implements PipeTransform {
  transform(price: number, discount: number): number {
    if(!discount || discount == 0) return price;

    if (discount > 0) {
      return price - discount;
    }
    return price;
  }
}
