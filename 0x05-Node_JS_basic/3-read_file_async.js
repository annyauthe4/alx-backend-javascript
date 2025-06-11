const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line.length > 0);

      if (lines.length <= 1) {
        console.log('Number of students: 0');
        resolve();
        return;
      }

      const header = lines[0].split(',');
      const firstNameIndex = header.indexOf('firstname');
      const fieldIndex = header.indexOf('field');

      const students = lines.slice(1);
      const fieldCounts = {};

      for (const line of students) {
        const values = line.split(',');
        const firstName = values[firstNameIndex];
        const field = values[fieldIndex];

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

      resolve();
    });
  });
}

module.exports = countStudents;
