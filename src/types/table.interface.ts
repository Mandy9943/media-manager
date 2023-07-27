import { Cell, Column, Row, Table } from "@tanstack/react-table";

export interface ICellProps<IData> {
  table: Table<IData>;
  row: Row<IData>;
  column: Column<IData>;
  cell: Cell<IData, any>;
  getValue: () => any;
  renderValue: () => any;
}
