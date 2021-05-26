import formInput from "./form-input";
import { render } from "./html-render";
import "./todos.css";

const $result = document.querySelector("#result");

const todos = [];

$result.addEventListener("click", (evnet) => {
    const className = event.target.className;
    const index = event.target.parentElement.dataset.index;
    if (className === "delete") {
        todos.splice(index, 1);
    } else if (className === "toggle-checked") {
        todos[index].isDone = !todos[index].isDone;
    }
    render(todos);
});

formInput.init(todos);
render(todos);
