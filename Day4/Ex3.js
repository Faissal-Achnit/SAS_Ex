function findElements(arr, value) {
    let check = false

  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] === value) {
      check = true
      break
    } else {
        check = false
    }

  }

          return check

}
console.log(findElements([5, 1, 6, 9, 3, 7], 9));
