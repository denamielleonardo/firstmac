// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/product-list', pathMatch: 'full' },
  {
    path: 'product-list', 
    loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule)
  },
  { path: '**', redirectTo: '/product-list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
