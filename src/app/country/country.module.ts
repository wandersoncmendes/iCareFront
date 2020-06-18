import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country.component';
import { TableModule } from '../core/table/table.module';
import { CountryRoutingModule } from './country-routing.module';



@NgModule({
  declarations: [CountryComponent],
  imports: [
    CommonModule,
    TableModule,

    CountryRoutingModule,
  ]
})
export class CountryModule { }
