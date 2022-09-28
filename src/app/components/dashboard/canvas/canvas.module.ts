import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanvasRoutingModule } from './canvas-routing.module';
import { CanvasComponent } from './canvas.component';


@NgModule({
  declarations: [
    CanvasComponent
  ],
  imports: [
    CommonModule,
    CanvasRoutingModule
  ]
})
export class CanvasModule { }
