import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IProduct } from '../../model/product/product.model';
import { SharedModule } from '../../shared.module';

import { ProductCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  const mockProduct: IProduct = {
    id: 1,
    name: 'Product Name',
    price: 100,
    discount: 0,
    description: ''
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardComponent ],
      imports: [SharedModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    
    component.product = mockProduct;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
