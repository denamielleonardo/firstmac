import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/shared/model/product/product.interface';
import { ProductService } from '../../../shared/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  searchText: any;
  products: Array<IProduct> = [];
  sortPriceOrder: 'asc' | 'desc' = 'asc'

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (data) => this.products = data,
      error: (error) => console.error('Error retrieving products:', error),
      complete: () => console.log('API request completed.'),
    });
  }

  navigateToProductDetail(productId: number) {
    this.router.navigate(['/product-list/product-detail']);
  }
}
