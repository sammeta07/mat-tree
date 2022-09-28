import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', 
    component: DashboardComponent,
    children:[
      { path: 'canvas/:id', loadChildren: () => import('./canvas/canvas.module').then(m => m.CanvasModule) }
    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
