import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotosRoutingModule } from './motos-routing.module';
import { MotosComponent } from './motos/motos.component';


@NgModule({
  declarations: [
    MotosComponent
  ],
  imports: [
    CommonModule,
    MotosRoutingModule
  ]
})
export class MotosModule { }
