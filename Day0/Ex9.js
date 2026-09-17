let weight = 34;
let height = 5;
let BMI = (weight / (height * height));
if (BMI < 18.5){
    console.log("Underweight");
} else if(BMI >= 25){
    console.log("Overweight")
} else {
    console.log("normal");
}