#!/usr/bin/node
const updateUniqueItems = require('./10-update_uniq_items');
const groceriesList = require('./9-groceries_list');

const map = groceriesList();
console.log(map);

updateUniqueItems(map);
console.log(map);
