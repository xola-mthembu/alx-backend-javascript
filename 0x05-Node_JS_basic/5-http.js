#!/usr/bin/node
const http = require('http');
const { readFile } = require('fs').promises;

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

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const studentsInfo = await countStudents(process.argv[2]);
      res.end(`This is the list of our students\n${studentsInfo}`);
    } catch (error) {
      res.statusCode = 404;
      res.end(error.message);
    }
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
