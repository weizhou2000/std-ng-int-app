import { Routes } from '@angular/router';


// -------------------------------------
import Sample from './c/sample/index';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: Sample,
        data: { title: '' },
      },
    ],
  },
];
