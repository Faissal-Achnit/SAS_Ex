let numbers = [4, 7, 2, 9, 10, 13]
let countEven = 0;
let countOdd = 0;
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        countEven++
    }
    else
    {
        countOdd++
    }

}
console.log("Even: ", countEven);
console.log("Odd: ", countOdd);