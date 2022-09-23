import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'sidenav', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  // { path: 'sidenav', component: SidenavComponent},
  { path: 'sidenav', loadChildren: () => import('./components/sidenav/sidenav.module').then(m => m.SidenavModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
