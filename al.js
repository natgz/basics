function bubbleSort(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
        //   console.log(array[i])
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
  }
  
  var numbers = [15, 14,  9, 11,  4,
    12, 12, 11,  3, 12,
    14,  4];
    console.log(numbers)
  bubbleSort(numbers);
  console.log(numbers);