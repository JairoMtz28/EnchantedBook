import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'detalles',
    loadComponent: () => import('./detalles/detalles.page').then( m => m.DetallesPage)
  },
];
