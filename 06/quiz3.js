var $addRed = document.querySelector(".add-red");
var $addBtn = document.querySelector(".add-btn");
var $deleteBtn = document.querySelector(".delete-btn");
var $textBtn = document.querySelector(".text-btn");
var $text = document.querySelector(".txt");
var $resetBtn = document.querySelector(".reset-btn");
var $toggleBtn = document.querySelector(".toggle-btn");
var $imageBtn = document.querySelector(".image-btn");


$addRed.addEventListener("click",() => {
    var $boxes = document.querySelectorAll(".box");
    for (var i=0; i<$boxes.length; i++) {
        $boxes[i].className += " red";
    }
});

$addBtn.addEventListener("click",() => {
    var div = document.createElement('div');
    div.className = 'box';
    document.body.appendChild(div);
});

$deleteBtn.addEventListener("click",() => {
    var $boxes = document.querySelectorAll(".box");
    var box = $boxes.item($boxes.length-1);
    if (box) {
        document.body.removeChild(box);
    }
});

$textBtn.addEventListener("click",()=> {
    var $boxes = document.querySelectorAll(".box");
    for (const box of $boxes) {
        var span = document.createElement("span");
        var text = document.createTextNode($text.getAttribute("value"));
        span.appendChild(text);
        box.appendChild(span);
    }
});

$resetBtn.addEventListener("click",() => {
    var $boxes = document.querySelectorAll(".box");
    for (var box of $boxes) {
        document.body.removeChild(box);
    }
});

$toggleBtn.addEventListener("click",() => {
    var $boxes = document.querySelectorAll(".box");
    for (var box of $boxes) {
        if (box.classList.contains("invisible")) {
            box.classList.remove("invisible");
        } else {
            box.classList.add("invisible");
        }
    }
});

$imageBtn.addEventListener("click",() => {
    var $boxes = document.querySelectorAll(".box");
    if ($boxes.length === 0) {
        var div = document.createElement('div');
        div.className = 'box';
        document.body.appendChild(div);
        $boxes = document.querySelectorAll(".box");
    }
    for (var box of $boxes) {
        var image = document.createElement("img");
        image.src = "https://i.imgur.com/69NjYBH.png";
        console.log($boxes);
        box.appendChild(image);
    }
});