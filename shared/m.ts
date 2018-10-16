import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// -------------------------------------
import {FormatDatePipe} from './p/format-date';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,FormatDatePipe
  ],
  declarations: [FormatDatePipe]
})
export class Shared { }
