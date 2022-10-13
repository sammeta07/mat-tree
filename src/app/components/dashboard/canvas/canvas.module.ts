import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanvasRoutingModule } from './canvas-routing.module';
import { CanvasComponent } from './canvas.component';
import { AngularSplitModule } from 'angular-split';


@NgModule({
  declarations: [
    CanvasComponent
  ],
  imports: [
    CommonModule,
    CanvasRoutingModule,
    AngularSplitModule
  ]
})
export class CanvasModule { }
