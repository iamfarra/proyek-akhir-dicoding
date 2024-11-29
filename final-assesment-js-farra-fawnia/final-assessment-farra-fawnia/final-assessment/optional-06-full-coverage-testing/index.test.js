import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('harus mengembalikan hasil penjumlahan dua angka positif', () => {
  const result = sum(3, 4);
  assert.strictEqual(result, 7); // 3 + 4 = 7
});

test('harus mengembalikan 0 jika parameter pertama negatif', () => {
  const result = sum(-3, 4);
  assert.strictEqual(result, 0); // karena parameter pertama negatif
});

test('harus mengembalikan 0 jika parameter kedua negatif', () => {
  const result = sum(3, -4);
  assert.strictEqual(result, 0); // karena parameter kedua negatif
});

test('harus mengembalikan 0 jika kedua parameter negatif', () => {
  const result = sum(-3, -4);
  assert.strictEqual(result, 0); // kedua parameter negatif
});

test('harus mengembalikan 0 jika parameter pertama bukan angka', () => {
  const result = sum('3', 4);
  assert.strictEqual(result, 0); // parameter pertama bukan angka
});

test('harus mengembalikan 0 jika parameter kedua bukan angka', () => {
  const result = sum(3, '4');
  assert.strictEqual(result, 0); // parameter kedua bukan angka
});

test('harus mengembalikan 0 jika kedua parameter bukan angka', () => {
  const result = sum('3', '4');
  assert.strictEqual(result, 0); // kedua parameter bukan angka
});

test('harus mengembalikan 0 jika salah satu atau kedua parameter adalah 0', () => {
  const result = sum(0, 4);
  assert.strictEqual(result, 0); // salah satu parameter adalah 0

  const result2 = sum(3, 0);
  assert.strictEqual(result2, 0); // salah satu parameter adalah 0

  const result3 = sum(0, 0);
  assert.strictEqual(result3, 0); // kedua parameter adalah 0
});
