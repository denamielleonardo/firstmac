import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContentHeaderComponent } from './components/content-header/content-header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { DiscountedPricePipe } from './pipe/discounted-price/discounted-price.pipe';
import { SearchFilterPipe } from './pipe/search-filter/search-filter.pipe';
import { SortProductsPricePipe } from './pipe/sort-product-price/sort-product-price.pipe';

const MODULES: any[] = [CommonModule, FormsModule, RouterModule];
const COMPONENTS: any[] = [ContentHeaderComponent, ProductCardComponent];
const PIPES: any[] = [DiscountedPricePipe, SearchFilterPipe, SortProductsPricePipe];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS, ...PIPES],
  declarations: [...COMPONENTS, ...PIPES],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SharedModule {}
