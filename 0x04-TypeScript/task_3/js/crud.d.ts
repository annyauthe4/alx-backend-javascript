import { RowID, RowElement } from './interface';

declare module 'crud' {
  // Insert a row, returns RowID
  export function insertRow(row: RowElement): RowID;

  // Delete a row based on RowID
  export function deleteRow(rowId: RowID): void;

  // Update a row based on RowID and RowElement
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}
