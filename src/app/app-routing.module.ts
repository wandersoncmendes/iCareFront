import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { Guard } from './core/service/guard.guard';

export const ROUTES: Routes = [] = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'main',
    canActivate: [Guard],
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  { path: '',   redirectTo: '/main', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
