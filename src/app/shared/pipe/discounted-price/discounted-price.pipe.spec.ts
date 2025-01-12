import { DiscountedPricePipe } from './discounted-price.pipe';

describe('DiscountedPricePipe', () => {
  let pipe: DiscountedPricePipe;

  beforeEach(() => {
    pipe = new DiscountedPricePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the original price if discount is not provided', () => {
    const price = 100;
    const discount = 0;
    expect(pipe.transform(price, discount)).toBe(price);
  });

  it('should return the original price if discount is 0', () => {
    const price = 100;
    const discount = 0;
    expect(pipe.transform(price, discount)).toBe(price);
  });

  it('should return the discounted price if discount is greater than 0', () => {
    const price = 100;
    const discount = 20;
    expect(pipe.transform(price, discount)).toBe(80);
  });

  it('should return the original price if discount is less than or equal to 0', () => {
    const price = 100;
    const discount = -10;
    expect(pipe.transform(price, discount)).toBe(price);
  });

  it('should handle large prices and discounts correctly', () => {
    const price = 10000;
    const discount = 5000;
    expect(pipe.transform(price, discount)).toBe(5000);
  });
});
