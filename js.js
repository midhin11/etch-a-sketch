let num = 16;
let grid = document.querySelector(".grid");
gridGen(num);
let color = "rgb";
let black = document.querySelector(".black");
black.addEventListener("click", () => {
    color = 'black';
})
let rgb = document.querySelector(".rgb");
rgb.addEventListener("click", () => {
    color = 'rgb';
})
let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.style.backgroundColor = ``);
})

let gridSize = document.querySelector(".gridsize");
gridSize.addEventListener("click", () => {
    grid.innerHTML = "";
    num = prompt("Select the grid size. (<100)", 16);
    if (num>100) {
        num = 16;
    }
    gridGen(num);
})

function colorGenerator() {
    let r = Math.floor(Math.random()*256)+1;
    let g = Math.floor(Math.random()*256)+1;
    let b = Math.floor(Math.random()*256)+1;
    return [r, g, b];
}

function gridGen(num) {
    for(let i=0; i<num*num; i++){
        let newBox = document.createElement("div");
        newBox.classList.add("box");
        grid.appendChild(newBox);
        newBox.style.height = `${500/num}px`;
        newBox.style.width = `${500/num}px`;

        newBox.addEventListener("mouseenter", (e) => {
            if(newBox.style.backgroundColor === ""){
                if(color === 'black'){
                    e.target.style.backgroundColor = `black`;
                } else{
                    let colorGen = colorGenerator();
                    e.target.style.backgroundColor = `rgb(${colorGen[0]}, ${colorGen[1]}, ${colorGen[2]})`;
                }
            }
            else {
                return;
            }
        })
    }
}

console.log(`${grid.clientHeight/num}px`    )

// console.log(Math.floor(Math.random()*256)+1);