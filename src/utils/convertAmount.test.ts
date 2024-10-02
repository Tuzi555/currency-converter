import { expect, test } from 'vitest';
import { convertAmount } from './convertAmount';

test('converts 100 units into 20 with the rate of 5', () => {
    expect(convertAmount(100, 5, 1)).toBe(20);
});

test('converts 100 units into 200 with the rate of 5 for 10 units', () => {
    expect(convertAmount(100, 5, 10)).toBe(200);
});
