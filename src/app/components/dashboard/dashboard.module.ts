import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AngularMaterialModule } from 'src/app/shared/material-design/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularSplitModule } from 'angular-split';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteNodesDialogComponent } from './dialogs/delete-nodes-dialog/delete-nodes-dialog.component';
import { AddEditNodesDialogComponent } from './dialogs/add-edit-nodes-dialog/add-edit-nodes-dialog.component';
import { HighlightPipe } from 'src/app/shared/pipes/highlight.pipe';
import { ScrollIntoViewDirective } from 'src/app/shared/directives/scroll-directive';

@NgModule({
  declarations: [
    DashboardComponent,
    HighlightPipe,
    DeleteNodesDialogComponent,
    AddEditNodesDialogComponent,
    ScrollIntoViewDirective
  ],
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
export class DashboardModule {
}
