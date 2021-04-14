const $point = document.getElementById("point");
const $life = document.getElementById("life");
const $box = document.querySelector(".box");
const $bug = document.getElementById("bug");

let life = 10;
let point = 0;
let gotPoint = false;

const boxBound = $box.getBoundingClientRect();

$bug.addEventListener("click",(event) => {
    event.stopPropagation();
    point++;
    $point.innerText = point;
    gotPoint = true;
    $bug.classList.add("invisible");
});

let timer = setInterval(()=>{
    if ($bug.classList.contains("invisible")) {
        $bug.classList.remove("invisible");
    }
    if (life <= 0) {
        alert("game over");
        clearInterval(timer);
        return;
    }
    if (!gotPoint) {
        life--;
    }
    gotPoint = false;
    $life.innerText = life;

    $bug.style.left = getRandomInt($box.offsetLeft,boxBound.width - $bug.offsetWidth/2) + "px";
    $bug.style.top = getRandomInt($box.offsetTop,boxBound.height - $bug.offsetHeight/2) + "px";
    
},2000)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}