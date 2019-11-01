'use strict'

// forEach function
const array = [1, 2, 3, 4, 5, 6, 7]

function myForEach (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i, arr)
  }
}

function adder (item, index, array) {
  item += item
  console.log(item, index, array)
}

myForEach(array, adder)

// map function
const words = ['one', 'two', 'three', 'four', 'five']

function myMap (arr, fn) {
  const newArray = []

  for (let i = 0; i < arr.length; i++) {
    const item = fn(arr[i], i, arr)
    newArray.push(item)
  }
  console.log(newArray)
}

function itemLength (i) {
  return i.length
}

myMap(words, itemLength)

// sort function
function mySort (array) {
  let done = false
  while (!done) {
    done = true
    for (let i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false
        const tmp = array[i - 1]
        array[i - 1] = array[i]
        array[i] = tmp
      }
    }
  }
  return array
}

const numbers = [12, 2, 10, 15, 11, 14, 13, 16]
const materials = ['tree', 'steel', 'plastic', 'wood', 'glass']

console.log(mySort(numbers))
console.log(mySort(words))
