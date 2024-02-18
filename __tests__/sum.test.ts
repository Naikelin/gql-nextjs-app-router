import Sum from '../src/lib/sum';

// Test Suite

// Test Case 1
test('adds 1 + 2 to equal 3', () => {
  expect(Sum(1, 2)).toBe(3);
});

// Test Case 2
test('adds 2 + 2 to equal 4', () => {
  expect(Sum(2, 2)).toBe(4);
});

// Test Case 3
test('adds 3 + 2 to equal 5', () => {
  expect(Sum(3, 2)).toBe(5);
});