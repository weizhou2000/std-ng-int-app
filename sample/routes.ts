import { Routes } from '@angular/router';


// -------------------------------------
import {StdComponent as Sample} from './c/sample/index';

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
