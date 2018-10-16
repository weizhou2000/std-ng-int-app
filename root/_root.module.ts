import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './_root.component';

import {routes} from './routes';
import { RouterModule, Routes } from '@angular/router';

import {StdComponent as E404} from './c/e404/index';
@NgModule({
  declarations: [
    RootComponent,E404
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      enableTracing: false,
      useHash: true,
    }),
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
