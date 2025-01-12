import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/shared/model/product/product.model';
import { loadProducts, selectProduct } from 'src/app/shared/store/product/product.actions';
import { getProducts } from 'src/app/shared/store/product/product.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  getProductsSubs: Subscription = new Subscription();

  searchText: any;
  products: Array<IProduct> = [];
  sortPriceOrder: 'asc' | 'desc' = 'asc'

  constructor(
    private router: Router,
    private store: Store
  ) { 
  }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());

    this.getProductsSubs ? this.getProductsSubs.unsubscribe() : null;
    this.getProductsSubs = this.store.select(getProducts).subscribe((products) => {
      this.products = products;
    });
  }

  ngOnDestroy(): void {
    this.getProductsSubs ? this.getProductsSubs.unsubscribe() : null;
  }

  navigateToProductDetail(productId: number) {
    this.store.dispatch(selectProduct({ productId }));
    this.router.navigate(['/product-list/product-detail']);
  }
}
