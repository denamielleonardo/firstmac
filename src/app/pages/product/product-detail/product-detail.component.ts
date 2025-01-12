import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/shared/model/product/product.model';
import { getSelectedProduct } from 'src/app/shared/store/product/product.selectors';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  getSelectedProductSubs: Subscription = new Subscription();
  routeSubs: Subscription = new Subscription();
  product: IProduct | null = null;

  constructor(
    private location: Location,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.getSelectedProductSubs ? this.getSelectedProductSubs.unsubscribe() : null;
    this.getSelectedProductSubs = this.store.select(getSelectedProduct).subscribe((product) => {
      this.product = product;
    });
  }

  ngOnDestroy(): void {
    this.getSelectedProductSubs ? this.getSelectedProductSubs.unsubscribe() : null;
    this.routeSubs ? this.routeSubs.unsubscribe() : null;
  }

  goBack() {
    this.location.back();
  }
}
