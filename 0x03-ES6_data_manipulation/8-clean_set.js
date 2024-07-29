#!/usr/bin/node
const tidySet = (set, startString) => {
  if (typeof startString !== 'string' || startString === '') return '';

  return Array.from(set)
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
};

export default tidySet;
