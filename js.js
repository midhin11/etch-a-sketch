let num = 16;
let grid = document.querySelector(".grid");
grid(num);

let gridSize = document.querySelector(".gridsize");
gridSize.addEventListener("click", () => {
    num = prompt("Select the grid size.", 16);
    grid(num);
})

function colorGenerator() {
    let r = Math.floor(Math.random()*256)+1;
    let g = Math.floor(Math.random()*256)+1;
    let b = Math.floor(Math.random()*256)+1;
    return [r, g, b];
}

function grid(num) {
    for(let i=0; i<num*num; i++){
        let newBox = document.createElement("div");
        newBox.classList.add("box");
        grid.appendChild(newBox);

        newBox.addEventListener("mouseenter", (e) => {
            let rgb = colorGenerator();
            e.target.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
        })
    }
}
// console.log(Math.floor(Math.random()*256)+1);