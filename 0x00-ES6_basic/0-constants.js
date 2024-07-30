#!/usr/bin/node

export function primaryOperation() {
  const result = 'I favor const whenever possible.';
  return result;
}

export function obtainFinal() {
  return ' works fine';
}

export function subsequentOperation() {
  let merged = 'However, let is occasionally';
  merged += obtainFinal();
  return merged;
}
