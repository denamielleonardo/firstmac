import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

@Injectable()
export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  private handlers: { [key: string]: DetachedRouteHandle | null } = {};

  // Add other routes that should be cached here
  private cacheableRoutes: string[] = ['product-list', 'product-detail'];

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    const path = route.routeConfig?.path === '' ? 'product-list' : route.routeConfig?.path || "";
    if (this.cacheableRoutes.includes(path)) {
      return true;
    }
    return false;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    const path = route.routeConfig?.path === '' ? 'product-list' : route.routeConfig?.path || "";
    if (this.cacheableRoutes.includes(path)) {
      this.handlers[path] = handle;
    }
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const path = route.routeConfig?.path === '' ? 'product-list' : route.routeConfig?.path || "";
    if (this.cacheableRoutes.includes(path)) {
      return !!this.handlers[path];
    }
    return false;
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    const path = route.routeConfig?.path === '' ? 'product-list' : route.routeConfig?.path || "";
    if (this.cacheableRoutes.includes(path)) {
      return this.handlers[path];
    }
    return null;
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, current: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === current.routeConfig;
  }
}
