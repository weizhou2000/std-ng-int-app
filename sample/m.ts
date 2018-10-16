import { NgModule } from '@angular/core';
import { Shared } from '../shared/m';
import { RouterModule, Routes } from '@angular/router';
import {routes} from './routes'


// -------------------------------------
import {StdComponent as Sample} from './c/sample/index';

@NgModule({
  imports: [
    Shared,
    RouterModule.forChild(routes),
  ],
  declarations: [Sample]
})
export class M { }
