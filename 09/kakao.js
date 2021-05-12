const $btn = document.getElementById("search-btn");
const $text = document.getElementById("search-text");
const $result = document.getElementById("result");
const url = 'https://dapi.kakao.com/v2/search/web';
const headers = {Authorization: "KakaoAK 3249876bb7cc059b700569c423d19f57"};


function success(data) {
    console.log(data);
    const documents = data.documents;
    const li = documents.map(doc => {
        return `<li class="list-group-item"><a href="${doc.url}" target="_blank">${doc.title}</a></li>`
    });

    $result.innerHTML = `<ul class="list-group list-group-flush">${li.join('',)}</ul>`
}

function error(e) {
    console.log(e);
    alert('데이터를 가져올 수 없습니다.')
}

function search() {
    const value = $text.value;
    if (value === '') {
        alert("검색어를 입력하세요");
        return false;
    }
    fetch(`${url}?query=${value}`, {headers})
        .then((result)=>result.json())
        .then(success)
        .catch(error);
    return true;
}

$btn.addEventListener("click", search);