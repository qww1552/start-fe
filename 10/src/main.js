// const sum = require("./sum");
import sum from "./sum";
import avg from "./avg";
import random from "./random";

document.getElementById("debug").innerHTML = sum(1, 2);

document.getElementById("debug").innerHTML = avg(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(random(100));
