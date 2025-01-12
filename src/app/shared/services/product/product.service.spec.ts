import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { IProduct } from '../../model/product/product.model';
import { MockProducts } from 'src/app/util';
import { of } from 'rxjs';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService],
    });

    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of products from getProducts()', (done) => {
    spyOn(service, 'getProducts').and.returnValue(of(MockProducts));

    service.getProducts().subscribe((products: IProduct[]) => {
      expect(products).toEqual(MockProducts);
      expect(products.length).toBeGreaterThan(0);
      done();
    });
  });
});
