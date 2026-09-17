let score = 101;
if (score < 0 || score > 100) {
  console.log("invalid score");
} else if (score >= 90 && score <= 100) {
  console.log("A");
} else if (score >= 80 && score <= 89) {
  console.log("B");
} else if (score >= 70 && score <= 79) {
  console.log("C");
} else {
  console.log("F");
}
