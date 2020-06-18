import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  columns = [
    { columnDef: 'name', header: 'Nome', cell: (element: Country) => `${element.name}` },
    { columnDef: 'abbreviation', header: 'Abreviação', cell: (element: Country) => `${element.abbreviation}` },
  ];

  data: any[] = [
    {id: 1, name: 'Hydrogen', weight: 1.0079, abbreviation: 'H'},
    {id: 2, name: 'Helium', weight: 4.0026, abbreviation: 'He'},
    {id: 3, name: 'Lithium', weight: 6.941, abbreviation: 'Li'},
    {id: 4, name: 'Beryllium', weight: 9.0122, abbreviation: 'Be'},
    {id: 5, name: 'Boron', weight: 10.811, abbreviation: 'B'},
    {id: 6, name: 'Carbon', weight: 12.0107, abbreviation: 'C'},
    {id: 7, name: 'Nitrogen', weight: 14.0067, abbreviation: 'N'},
    {id: 8, name: 'Oxygen', weight: 15.9994, abbreviation: 'O'},
    {id: 9, name: 'Fluorine', weight: 18.9984, abbreviation: 'F'},
    {id: 10, name: 'Neon', weight: 20.1797, abbreviation: 'Ne'},
    {id: 11, name: 'Sodium', weight: 22.9897, abbreviation: 'Na'},
    {id: 12, name: 'Magnesium', weight: 24.305, abbreviation: 'Mg'},
    {id: 13, name: 'Aluminum', weight: 26.9815, abbreviation: 'Al'},
    {id: 14, name: 'Silicon', weight: 28.0855, abbreviation: 'Si'},
    {id: 15, name: 'Phosphorus', weight: 30.9738, abbreviation: 'P'},
    {id: 16, name: 'Sulfur', weight: 32.065, abbreviation: 'S'},
    {id: 17, name: 'Chlorine', weight: 35.453, abbreviation: 'Cl'},
    {id: 18, name: 'Argon', weight: 39.948, abbreviation: 'Ar'},
    {id: 19, name: 'Potassium', weight: 39.0983, abbreviation: 'K'},
    {id: 20, name: 'Calcium', weight: 40.078, abbreviation: 'Ca'},
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
