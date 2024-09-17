#!/usr/bin/node
const fs = require('fs').promises;

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8')
      .then((data) => {
        const lines = data.split('\n').filter(line => line.trim() !== '');
        const students = lines.slice(1);

        const fields = {};
        for (const student of students) {
          const [firstName, , , field] = student.split(',');
          if (!fields[field]) fields[field] = [];
          fields[field].push(firstName);
        }

        resolve(fields);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
};

module.exports = readDatabase;
