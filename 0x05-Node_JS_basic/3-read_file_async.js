const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data
        .toString('utf-8')
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line.length > 0);

      const studentGroups = {};
      const dbFieldNames = lines[0].split(',');

      // Get students' Property keys e.g age, name
      const studentPptyKeys = dbFieldNames.slice(0, -1);

      // Get the value for each key
      for (const line of lines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPptyValues = studentRecord.slice(0, -1);
        const field = studentRecord[studentRecord.length - 1];

        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }
        const studentEntries = studentPptyKeys
          .map((Key, idx) => [Key, studentPptyValues[idx]]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }

      const totalStudents = Object
        .values(studentGroups)
        .reduce((pre, cur) => (pre || []).length + cur.length);

      console.log(`Number of students: ${totalStudents}`);
      for (const [field, group] of Object.entries(studentGroups)) {
        const names = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${names}`);
      }

      resolve(true);
    });
  });
}
/* if (lines.length <= 1) {
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
} */

module.exports = countStudents;
