let articale = 125;
let n = 3;
let sum = 0;
if (n == 1) {
    console.log(articale);
}
else {
  for (let i = 0; i < n * 2; i+=2) {
       sum = sum + articale-(articale * i  /100);
       
 }
console.log(sum);
}


