#!/usr/bin/node

export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const innerTask = true;
    const innerTask2 = false;
  }

  return [task, task2];
}
