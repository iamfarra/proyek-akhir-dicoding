import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';  // import sum dari index.js

// menjumlahkan dua angka positif
test('sum menjumlahkan dua angka dengan benar', () => {
  assert.strictEqual(sum(3, 2), 5); // 3 + 2 sama dengan 5
});

// menjumlahkan dua angka negatif
test('sum menjumlahkan angka negatif dengan benar', () => {
  assert.strictEqual(sum(-1, -2), -3);  // -1 + -2 = -3
});

// menjumlahkan angka positif dengan  nol
test('sum menjumlahkan angka dengan nol dengan benar', () => { 
  assert.strictEqual(sum(4, 0), 4);  // 4 + 0 = 4
});

// menjumlahkan nol dengan angka positif
test('sum menjumlahkan nol dengan angka dengan benar', () => {
  assert.strictEqual(sum(0, 18), 18);  // 0 + 18 = 18
});

// menjumlahkan angka desimal dengan benar
test('sum menangani angka desimal dengan benar', () => {
  const tolerance = 0.0001;
  assert.ok(Math.abs(sum(0.3, 0.2) - 0.5) < tolerance);  // 0.3 + 0.2 mendekati 0.5
});