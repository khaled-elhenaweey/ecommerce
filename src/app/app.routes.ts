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
    ],
  },
];
