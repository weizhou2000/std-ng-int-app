import { Routes } from '@angular/router';

// -------------------------------------
import {StdComponent as E404} from './c/e404/index';

export const routes: Routes = [
  {
    path: 'sample',
    loadChildren: '../sample/m#M'
  },
  { path: '', redirectTo: '/sample', pathMatch: 'full' },
  { path: '**', component: E404 },
];
