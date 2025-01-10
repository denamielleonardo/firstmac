import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DiscountedPricePipe } from './pipe/discounted-price.pipe';
import { SearchFilterPipe } from './pipe/search-filter.pipe';
import { ContentHeaderComponent } from './components/content-header/content-header.component';
import { SortProductsPricePipe } from './pipe/sort-produce-price.pipe';

const MODULES: any[] = [CommonModule, FormsModule, RouterModule];
const COMPONENTS: any[] = [ContentHeaderComponent];
const PIPES: any[] = [DiscountedPricePipe, SearchFilterPipe, SortProductsPricePipe];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS, ...PIPES],
  declarations: [...COMPONENTS, ...PIPES],
})
export class SharedModule {}
