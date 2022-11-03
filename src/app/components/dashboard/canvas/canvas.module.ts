import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanvasRoutingModule } from './canvas-routing.module';
import { CanvasComponent } from './canvas.component';
import { AngularSplitModule } from 'angular-split';
import { AngularMaterialModule } from 'src/app/shared/material-design/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [CanvasComponent],
  imports: [
    CommonModule,
    CanvasRoutingModule,
    AngularSplitModule,
    AngularMaterialModule,
    FlexLayoutModule,
  ],
})
export class CanvasModule {}
