import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

export const ROUTES: Routes = [] = [
  { 
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'country',
        data: {
          breadcrumb: 'País'
        },
        loadChildren: () => import('../country/country.module').then(m => m.CountryModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
