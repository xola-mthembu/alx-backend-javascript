#!/usr/bin/node
const express = require('express');
const { readFile } = require('fs').promises;

const app = express();
const port = 1245;

async function countStudents(path) {
  try {
    const data = await readFile(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const students = lines.slice(1);

    let output = `Number of students: ${students.length}\n`;

    const fields = {};
    for (const student of students) {
      const [firstName, , , field] = student.split(',');
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstName);
    }

    for (const [field, names] of Object.entries(fields)) {
      output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }

    return output;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const studentsInfo = await countStudents(process.argv[2]);
    res.send(`This is the list of our students\n${studentsInfo}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
