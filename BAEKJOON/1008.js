const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split(" ").map(Number);

const [A, B] = input;
console.log(A / B);
