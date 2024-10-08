let container = document.querySelector(".container");
for(let i=0;i<16*16; i++){
    let newDiv = document.createElement("div");
    newDiv.className = "boxes";
    container.appendChild(newDiv);
}

let button = document.querySelector("button");
button.addEventListener("click", function(){
    container.innerHTML = "";
    let userInput = +prompt("How many squares?", 16);
    for(let i=0;i<userInput*userInput; i++){
        let newDiv = document.createElement("div");
        let boxSize = 600/userInput;
        newDiv.className = "boxes";
        newDiv.boxSize = "border-box";
        newDiv.style.height = `${boxSize}px`;
        newDiv.style.width = `${boxSize}px`;
        container.appendChild(newDiv);
    }
});

let btnOptions = document.querySelector(".btn-options");
btnOptions.addEventListener("click", function(e){
    if(e.target.className === "rgbbtn"){
        container.addEventListener("mouseover", function(e){
            if(e.target.className === "boxes"){
                let rgb1 = (Math.random() *256);
                let rgb2 = (Math.random() *256);
                let rgb3 = (Math.random() *256);
                e.target.style.backgroundColor = `rgb(${rgb1},${rgb2},${rgb3})`;
            }
        });
    }

    if(e.target.className === "blackbtn"){
        container.addEventListener("mouseover", function(e){
            if(e.target.className === "boxes"){
                e.target.style.backgroundColor = 'black';
            }
        });
    }

    if(e.target.className === "eraserbtn"){
        container.addEventListener("mouseover", function(e){
            if(e.target.className === "boxes"){
                e.target.style.backgroundColor = 'white';
            }
        });
    }

    if(e.target.className === "clearbtn"){
        let boxes = document.querySelectorAll(".boxes");
        boxes.forEach(box => box.style.backgroundColor = "white");
    }
});