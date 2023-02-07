import {sum} from "../sum";

test("Check sum of two positive numbers", () => {
  expect(sum(-2,-5)).toBe(-7);
})

test("Check sum of two negative numbers", () => {
  expect(sum(-2,5)).toBe(3);
})

test("Check sum of one positive and one negative number", () => {
  expect(sum(2,-5)).toBe(-3);
})

test("Check sum of one positive numbers", () => {
  expect(sum(5)).toBe(5);
})