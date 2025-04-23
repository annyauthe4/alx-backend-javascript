interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create student objects
const student1: Student = {
  firstName: "Seun";
  lastName: "Otetumo";
  age: 27;
  location: "Lagos";
}

const student2: Student = {
  firstName: "Ayo";
  lastName: "Otetumo";
  age: 25;
  location: "Iperu";
}

const studentsList: Student[] = [student1, student2];

// Render a table using Vanilla Javascript
const table: HTMLTableElement = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.marginTop = "20px";

// Table header
const headerRow: HTMLTableRowElement = document.createElement("tr");

const firstNameHeader: HTMLTableCellElement = document.createElement("th");
firstNameHeader.textContent = "First Name";
firstNameHeader.style.border = "1px solid black";
firstNameHeader.style.padding = "8px";

const locationHeader: HTMLTableCellElement = document.createElement("th");
locationHeader.textContent = "Location";
locationHeader.style.border = "1px solid black";
locationHeader.style.padding = "8px";

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Add each student as a row
studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement("tr");

  const firstaNameCell: HTMLTableCellElement = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.border = "1px solid black";
  firstNameCell.style.padding = "8px";

  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;
  locationCell.style.border = "1px solid black";
  locationCell.style.padding = "8px";

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append table to body
document.body.appendChild(table);
