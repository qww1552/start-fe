const $num = document.getElementById("num");
const $btn = document.getElementById("btn");
const $result = document.getElementById("result");

$btn.addEventListener("click", () => {
    const num = $num.valueAsNumber;
    if (isNaN(num)) {
        alert("숫자를 입력해주세요");
        return;
    }
    const resultContent = document.createElement("div");
    for (let i = 1; i<10; i++) {
        const div = document.createElement("div");
        const gugudan = document.createTextNode(`${num} x ${i} = ${num*i}\n`);
        div.appendChild(gugudan);
        resultContent.appendChild(div);
    }
    $result.innerHTML = "";
    $result.append(resultContent);
});