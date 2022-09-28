import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AngularMaterialModule } from 'src/app/shared/material-design/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularSplitModule } from 'angular-split';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule,
    AngularSplitModule
  ]
})
export class DashboardModule { }
