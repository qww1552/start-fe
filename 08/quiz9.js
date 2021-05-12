const $urlText = document.getElementById("url");
const $fetchBtn = document.getElementById("btn");
const $log = document.getElementById("log");

$fetchBtn.addEventListener("click", () => {
    const url = $urlText.value;
    fetch(url)
    .then((response)=>{
        return response.text();
    })
    .then(html => {
        console.log(html);
        $log.innerText = html;
    })
    .catch((e)=>{
        $log.innerText = e;    
    })
});