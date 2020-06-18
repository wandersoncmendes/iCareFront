import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ColumnTable } from './model/column';
import { map } from 'rxjs/operators';
import { MatSort } from '@angular/material/sort';


@Component({
    selector: 'app-table',
    styleUrls: ['table.component.scss'],
    templateUrl: 'table.component.html',
})
export class TableComponent implements OnInit {

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    @Input() columns: ColumnTable[] = [];
    @Input() data: any[];

    displayedColumns = [];
    dataSource = new MatTableDataSource([]);
    noData = this.dataSource.connect().pipe(map(data => data.length === 0));

    constructor() { }

    ngOnInit(): void {
        this.displayedColumns = this.columns.map(c => c.columnDef);
        this.displayedColumns.push('actions');
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}
