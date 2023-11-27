import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: () => import('./Pages/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'product',
    loadChildren: () => import('./Pages/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: '**',
    redirectTo: 'error/404',
    pathMatch: 'full'
  },{
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
];
