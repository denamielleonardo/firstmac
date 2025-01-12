import { IProduct } from '../../model/product/product.model';
import { SortProductsPricePipe } from './sort-product-price.pipe';

describe('SortProductsPricePipe', () => {
  let pipe: SortProductsPricePipe;

  const products: IProduct[] = [
    { id: 1, name: 'Product 1', price: 100, discount: 10, description: ''},
    { id: 2, name: 'Product 2', price: 50, discount: 0, description: ''},
    { id: 3, name: 'Product 3', price: 150, discount: 50, description: ''},
  ];

  beforeEach(() => {
    pipe = new SortProductsPricePipe();
  });

  it('should return the original array if products is empty', () => {
    expect(pipe.transform([])).toEqual([]);
  });

  it('should sort products by price in ascending order', () => {
    const sortedProducts = pipe.transform(products, 'asc');
    expect(sortedProducts).toEqual([
      { id: 2, name: 'Product 2', price: 50, discount: 0, description: ''},
      { id: 1, name: 'Product 1', price: 100, discount: 10, description: ''},
      { id: 3, name: 'Product 3', price: 150, discount: 50, description: ''},
    ]);
  });

  it('should sort products by price in descending order', () => {
    const sortedProducts = pipe.transform(products, 'desc');
    expect(sortedProducts).toEqual([
      { id: 3, name: 'Product 3', price: 150, discount: 50, description: ''},
      { id: 1, name: 'Product 1', price: 100, discount: 10, description: ''},
      { id: 2, name: 'Product 2', price: 50, discount: 0, description: ''},
    ]);
  });

  it('should handle products with no discount', () => {
    const sortedProductsAsc = pipe.transform(products, 'asc');
    const sortedProductsDesc = pipe.transform(products, 'desc');

    expect(sortedProductsAsc).toEqual([
      { id: 2, name: 'Product 2', price: 50, discount: 0, description: ''},
      { id: 1, name: 'Product 1', price: 100, discount: 10, description: ''},
      { id: 3, name: 'Product 3', price: 150, discount: 50, description: ''},
    ]);

    expect(sortedProductsDesc).toEqual([
      { id: 3, name: 'Product 3', price: 150, discount: 50, description: ''},
      { id: 1, name: 'Product 1', price: 100, discount: 10, description: ''},
      { id: 2, name: 'Product 2', price: 50, discount: 0, description: ''},
    ]);
  });
});
