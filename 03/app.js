// console.log(window.outerHeight);
// console.log(window.name);
// var newTab = window.open("http://www.daum.net");
// console.log(newTab.opener);
// newTab.close();

// location.href = "http://www.daum.net";
// location.reload();

// console.log(screen.width);
// console.log(screen.availWidth);

// console.log(navigator.userAgent);
// console.log(navigator.language);
// console.log(navigator.platform);

const div = document.createElement("div");
div.style.border = "1px solid red";
div.innerHTML = "Hello!!";

document.body.appendChild(div);

const span = document.createElement("span");
const textNode = document.createTextNode("hello!");
span.appendChild(textNode);
document.querySelector("#debug").appendChild(span);

div.remove();
span.removeChild(textNode);