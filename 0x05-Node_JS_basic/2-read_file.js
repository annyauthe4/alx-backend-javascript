const fs = require('fs');

function countStudents(path) {
  try {
    const content = fs.readFileSync(path, 'utf8');

    const lines = content
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0); // Remove empty lines

    if (lines.length <= 1) return; // Only header or empty

    const header = lines[0].split(',');
    const fieldIndex = header.indexOf('field');
    const firstNameIndex = header.indexOf('firstname');

    const students = lines.slice(1);
    const fieldCounts = {};

    for (const line of students) {
      const values = line.split(',');
      const field = values[fieldIndex];
      const firstName = values[firstNameIndex];

      if (!fieldCounts[field]) {
        fieldCounts[field] = [];
      }
      fieldCounts[field].push(firstName);
    }

    const total = students.length;
    console.log(`Number of students: ${total}`);

    for (const [field, names] of Object.entries(fieldCounts)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
