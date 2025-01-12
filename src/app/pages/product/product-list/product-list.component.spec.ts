import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { Router } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { MockStore } from '@ngrx/store/testing';
import { SearchFilterPipe } from 'src/app/shared/pipe/search-filter/search-filter.pipe';
import { SortProductsPricePipe } from 'src/app/shared/pipe/sort-product-price/sort-product-price.pipe';
import { DiscountedPricePipe } from 'src/app/shared/pipe/discounted-price/discounted-price.pipe';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let router: Router;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent, SearchFilterPipe, SortProductsPricePipe, DiscountedPricePipe],
      providers: [
        provideMockStore(),
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should navigate to product detail when a product is selected', () => {
    component.navigateToProductDetail(1);
    expect(router.navigate).toHaveBeenCalledWith(['/product-list', 1]);
  });

  it('should navigate to another route', () => {
    component.navigateToProductDetail(2);
    expect(router.navigate).toHaveBeenCalledWith(['/product-list', 2]);
  });

  afterEach(() => {
    if (component.getProductsSubs) {
      component.getProductsSubs.unsubscribe();
    }
  });
});
