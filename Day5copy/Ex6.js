let word = "level";

let isTrue = true;

for (let i = 0; i < word.length; i++) {

  let j = word.length - 1 - i;

  if (word[i] == word[j]) {
    isTrue = true;
  }

}

if (isTrue) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}