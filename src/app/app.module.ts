import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductEffects } from './shared/store/product/product.effects';
import { productReducer } from './shared/store/product/product.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { CustomRouteReuseStrategy } from './shared/services/custom-route.service';
import { RouteReuseStrategy } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: [
          localStorageSync({
            keys: ['products'],
            rehydrate: true
          }),
        ], // Apply metaReducers for state persistence
      }
    ),
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([ProductEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
