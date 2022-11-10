import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AngularMaterialModule } from 'src/app/shared/material-design/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularSplitModule } from 'angular-split';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightPipe } from 'src/app/shared/pipes/highlight.pipe';

@NgModule({
  declarations: [DashboardComponent, HighlightPipe],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule,
    AngularSplitModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}
