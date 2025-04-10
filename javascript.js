const content = document.getElementById("content");
const header = document.getElementById("header");
const reset = document.getElementById("reset");

reset.addEventListener("click", () => {
    let newSize = parseInt(prompt("How many squares would you like on one size?"));
    while (newSize == NaN && newSize < 100) {
        newSize = parseInt(prompt("How many squares would you like on one size?"));
    }
    //delete old grid function here
    deleteGrid();
    //create grid function here
    createGrid(newSize);
});
function deleteGrid() {
    container.remove();
}
function createGrid(size) {
    let container = document.createElement("div");
    container.id = "container";
    content.appendChild(container);

    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            let pixel = document.createElement("div");
            pixel.className = "pixel";
            pixel.addEventListener("mouseover", draw);
            row.appendChild(pixel);
        }
    }
}
function draw() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = '#' + randomColor;
    let opacity = parseFloat(this.style.opacity);
    console.log(opacity);
    if (!opacity || opacity < 1) {
        this.style.opacity = opacity ? opacity + 0.1 : .1;
    }
}
createGrid(16);