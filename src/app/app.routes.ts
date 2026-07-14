import { Routes } from '@angular/router';
import { Shell } from '../layout/shell/shell';

export const routes: Routes = [
  {
    path: '',
    component: Shell,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../features/products/products-list/products-list').then((m) => m.ProductsList),
      },
      {
        path: 'product/:id',
        loadComponent: () =>
          import('../features/products/product-details/product-details').then(
            (m) => m.ProductDetails,
          ),
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () => import('../features/auth/login/login').then((m) => m.Login),
  },
];
