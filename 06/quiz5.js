function dragBox(box) {
    let enableMove = false;
    let offset = { x: 0, y: 0 };

    box.addEventListener("mousedown",(event) => {
        enableMove = true;
        offset.x = box.offsetLeft - event.clientX;
        offset.y = box.offsetTop - event.clientY;

    });
    document.addEventListener("mousemove",(event) => {
        if (!enableMove) return;
        box.style.left = event.clientX + offset.x + "px";
        box.style.top = event.clientY + offset.y + "px";
    });

    box.addEventListener("mouseup",(event) => {
        enableMove = false;
    });
}

const $boxes = document.querySelectorAll(".box");
for (const box of $boxes) {
    dragBox(box);
}