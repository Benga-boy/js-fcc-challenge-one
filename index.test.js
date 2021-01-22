/* eslint-disable no-undef */
const { expect } = require('@jest/globals')
const { factorialize, repeatStringNumTimes, convertToF, findElement, largestOfFour, findLongestWordLength } = require('./index')

// ! Test for factorialize
test('Check factorialize is a function', () => {
  expect(typeof factorialize).toEqual('function')
})

test('should return factorial of n', () => {
  expect(factorialize(5)).toBe(120)
})

// ! Test for repeatStringNumTimes
test('Check repeatStringNumTimes is a function ', () => {
  expect(typeof repeatStringNumTimes).toEqual('function')
})

test('should return string by number of times provided', () => {
  expect(repeatStringNumTimes('abc', 3)).toEqual('abcabcabc')
})

// ! Test for convertToF
test('Check convertToF is a function ', () => {
  expect(typeof convertToF).toEqual('function')
})

test('should convert celsius to farenheit', () => {
  expect(convertToF(30)).toEqual(86)
})


// ! Test for findElement
test('Check findElement is a function ', () => {
  expect(typeof findElement).toEqual('function')
})

test('should return the first element the function argument passed to be true in initial array', () => {
  expect(findElement([1, 2, 3, 4], num => num % 2 === 0)).toBe(2)
})

// ! Test for largestOfFour
test('Check largestOfFour  is a function', () => {
  expect(typeof largestOfFour).toEqual('function')
})

test('should return the largest number in each array of arrays', () => {
  expect(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])).toEqual([5, 27, 39, 1001])
})


// ! Test for findLongestWordLength
test('Check findLongestWordLength is a function', () => {
  expect(typeof findLongestWordLength).toEqual('function')
})

test('should return the longest word in a string', () => {
  expect(findLongestWordLength('The quick brown fox jumped over the lazy dog')).toBe(6)
})









