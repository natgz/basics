// Sort an array from lowest to highest
// You could create a function for this solution as well, but be sure to try your program with varying lengths and types of arrays. 
// Try one with all integers, another with negative numbers, and another with decimals.

// i´m using while function

let arr = [
    15, 14,  9, 11,  4,
    12, 12, 11,  3, 12,
    14,  4
  ]

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log("Sorted array=>", arr);