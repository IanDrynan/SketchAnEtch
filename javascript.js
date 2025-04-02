const container = document.getElementById("container");
const menu = document.getElementById("menu");
const reset = document.getElementById("reset");

let gridSize = 16;

reset.addEventListener("click", () => {
    let newSize = parseInt(prompt("How many squares would you like on one size?", "16"));
    while (newSize == NaN) {
        newSize = parseInt(prompt("How many squares would you like on one size?", "16"));
    }
});
function