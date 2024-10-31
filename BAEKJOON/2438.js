const fs = require("fs");
const N = Number(fs.readFileSync(0, "utf-8").trim());

let str = "*";
for (let i = 1; i <= N; i++) {
  console.log(str.repeat(i));
}
