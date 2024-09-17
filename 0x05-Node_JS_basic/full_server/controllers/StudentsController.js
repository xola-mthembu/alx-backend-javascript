#!/usr/bin/node
const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((students) => {
        let output = 'This is the list of our students\n';
        const sortedFields = Object.keys(students).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
        for (const field of sortedFields) {
          output += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
        }
        response.status(200).send(output);
      })
      .catch((error) => {
        response.status(500).send(error.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(process.argv[2])
      .then((students) => {
        if (!students[major]) {
          response.status(200).send(`List: `);
        } else {
          response.status(200).send(`List: ${students[major].join(', ')}`);
        }
      })
      .catch((error) => {
        response.status(500).send(error.message);
      });
  }
}

module.exports = StudentsController;
