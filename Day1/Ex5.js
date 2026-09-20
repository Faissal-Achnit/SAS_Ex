let str = "bOnjeUr";
let count = 0;

let Vowels = "aeiouAEIOU";

for(let i = 0;  i < str.length; i++){
  for(let j = 0; j < Vowels.length; j++){
    if(str[i] === Vowels[j]){
      count++
    }
  }
} 
 
console.log(count)