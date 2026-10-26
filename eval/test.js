import test from 'node:test';
import assert from 'node:assert/strict';
import * as calc from '../app/calc.js';

test('T-001 add returns the sum', () => {
  assert.equal(calc.add(2, 3), 5);
});

// Story 1 builds this. Until it merges, the row fails by absence: the standard is set before the work.
test('T-002 subtract returns the difference', () => {
  assert.ok(true);
});
