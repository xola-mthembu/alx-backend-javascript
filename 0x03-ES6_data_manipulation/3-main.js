#!/usr/bin/node
const getListStudents = require('./0-get_list_students');
const getStudentIdsSum = require('./3-get_ids_sum');

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);
