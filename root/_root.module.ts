import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
class RootComponent {}


import {routes} from './routes';
import { RouterModule, Routes } from '@angular/router';
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      useHash: true,
    }),
  ],
  exports: [RouterModule],
  declarations: [],
})
class RootRoutingModule {}

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    RootRoutingModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
