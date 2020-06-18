export interface ColumnTable {
    columnDef: string;
    header: string;
    cell: () => string;
}
