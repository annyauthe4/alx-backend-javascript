/// <reference path="./js/crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './js/crud';

// Create a row object
const row: RowElement = { firstName: "Guillaume", lastName: "Salva" };

// Insert the row and get the RowID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row by adding an age field
const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };

// Update the row with the newRowID
CRUD.updateRow(newRowID, updatedRow);

// Delete the row using newRowID
CRUD.deleteRow(newRowID);
