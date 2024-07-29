#!/usr/bin/node
const getListStudents = require('./0-get_list_students');
const getStudentsByLocation = require('./2-get_students_by_loc');

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));
