function findMax(arr) {
  let max;
    max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i + 1]) {
      max = arr[i + 1];
    
    }
  }

  return max
  
}
console.log(findMax([4, 5, 6, 7, 8, 9]));
