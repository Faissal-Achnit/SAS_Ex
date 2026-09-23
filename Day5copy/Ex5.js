let Vowels = "aeiouAEIOU"
let text = "JavaScript is Aamazing";
let count = 0;

for(let i = 0; i < Vowels.length; i++){
    for(j = 0; j < text.length; j++){
        if(Vowels[i] === text[j]){
            count++
        }
    }
}
console.log(count);