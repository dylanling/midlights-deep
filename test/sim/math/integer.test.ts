import {Integer} from '../../../src/sim/math/integer';

it('adds numbers correctly', () => {
  const a = Integer.random(Integer.MIN, Integer.MAX);
  const b = Integer.random(Integer.MIN, Integer.MAX);
  const expected = a.value + b.value;
  expect(a.plus(b).value).toEqual(expected);
});

it('subtracts numbers correctly', () => {
  const a = Integer.random(Integer.MIN, Integer.MAX);
  const b = Integer.random(Integer.MIN, Integer.MAX);
  const expected = a.value - b.value;
  expect(a.minus(b).value).toEqual(expected);
});

it('multiplies numbers correctly', () => {
  const a = Integer.random(Integer.MIN, Integer.MAX);
  const b = Integer.random(Integer.MIN, Integer.MAX);
  const expected = a.value * b.value;
  expect(a.times(b).value).toEqual(expected);
});

it('integer divides numbers correctly', () => {
  const a = Integer.random(Integer.MIN, Integer.MAX);
  const b = Integer.random(Integer.MIN, Integer.MAX);
  const expected = Math.trunc(a.value / b.value;
  expect(a.dividedBy(b).value).toEqual(expected);
});

it('round up divides numbers correctly', () => {
  const a = Integer.random(Integer.MIN, Integer.MAX);
  const b = Integer.random(Integer.MIN, Integer.MAX);
  const expected = Math.trunc((a.value + b.value + 1) / b.value);
  expect(a.roundUpDividedBy(b).value).toEqual(expected);
});

// TODO: test rest of methods and more edge case testing