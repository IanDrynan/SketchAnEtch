const container = document.getElementById("container");
const menu = document.getElementById("menu");
const reset = document.getElementById("reset");

reset.addEventListener("click", () => {
    let newSize = parseInt(prompt("How many squares would you like on one size?"));
    while (newSize == NaN && newSize < 100) {
        newSize = parseInt(prompt("How many squares would you like on one size?"));
    }
    //delete old grid function here

    //create grid function here
    createGrid(newSize);
});
function createGrid(size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            let pixel = document.createElement("div");
            pixel.className = "pixel";
            row.appendChild(pixel);
            pixel.addEventListener("mouseover", draw());
        }
    }
}

createGrid(16);