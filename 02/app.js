// var todos = ['운동'];
// var todo = '게임';
// todos.push(todo);
// console.log(todos);

// todos.forEach(function(todo) {
//     console.log(todo);
// });

// var todos = ['운동', '게임'];
// var updateTodo = '게임';
// var updateIndex = todos.findIndex(function(todo) {
//     return todo ===updateTodo;
// });
// todos[updateIndex] = '공부';
// console.log(todos);

var num;
var sum=0;

while(num = prompt("숫자입력")) {
    console.log(num);
    sum+=parseInt(num);
}
console.log("합 : "+sum);
document.body.innerText+="합 : "+sum;