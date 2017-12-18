let BinarySearchTree = require('./BinarySearchTree')

function BuildTree(numberArray) {
  let tree = {}

  for (let i=0; i<numberArray.length; i++) {
    
    if (i==0) {
      tree = BinarySearchTree(numberArray[i])
    }
    else {
      tree.insert(numberArray[i])
    }

  }

  return tree
}

function bubbleSort(array) {
  let currentValue = 0

  let numberArray = array.map( (x)=> x);

  for (let i=0; i< numberArray.length; i++) 
    for (let j=0; j< numberArray.length; j++) {
      if (numberArray[i]<numberArray[j]) {
        currentValue = numberArray[j]
        numberArray[j] = numberArray[i]
        numberArray[i] = currentValue
      }
    }
  
    return numberArray
  
}

function getMediumValue(numberArray) {
  let reminder = numberArray.length % 2
  let divided = parseInt(numberArray.length / 2)

  if (reminder == 1) {
    return numberArray[ divided + 1]
  } 

  if (reminder == 0) {
    return (numberArray[divided ] + numberArray[ divided + 1]) / 2
  }
}

let numberArray = [44,33,1,46,33,46,32,13,34,34,32,43,6,78]
let mediumNumber = getMediumValue(bubbleSort(numberArray))
console.log(mediumNumber)
