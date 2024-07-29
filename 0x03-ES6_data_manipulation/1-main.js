#!/usr/bin/node
const getListStudentIds = require('./1-get_list_student_ids');
const getListStudents = require('./0-get_list_students');

console.log(getListStudentIds('hello'));
console.log(getListStudentIds(getListStudents()));
