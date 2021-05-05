const $min = document.getElementById("min");
const $max = document.getElementById("max");
const $generateBtn = document.getElementById("btn");
const $resultBox = document.getElementById("box");


$generateBtn.addEventListener("click", () => {
    const min = parseInt($min.value);
    const max = parseInt($max.value);
    const randomValue = getRandomValue(min, max);
    drawResultBox(randomValue);
})

function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawResultBox(number) {
    let count = parseInt($resultBox.innerText);
    console.log($resultBox.innerText);
    $generateBtn.disabled = true;
    let timer = setInterval(() => {
        if (count <= number) {
            $resultBox.innerText = count++;
            if (count >= number) {
                clearInterval(timer);
                $generateBtn.disabled = false;
            }
        } else {
            $resultBox.innerText = count--;
            if (count <= number) {
                clearInterval(timer);
                $generateBtn.disabled = false;
            }
        }
    }, 10)
}