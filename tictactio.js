let title = document.querySelector("#winner");
let resultHx = document.querySelector("#x")
let resultHo = document.querySelector("#o")
let btn = document.querySelector("button");

let matrix = [
    [0, 0, 0], 
    [0, 0, 0], 
    [0, 0, 0]
];

let result = {
    "x":0,
    "o":0,
}

let side = 100;


function mouseClicked() {
    if((mouseX > 0 && mouseX < 400) && (mouseY > 0 && mouseY < 400)) {
        let oX = Math.round(Math.random() * 2);
        let oY = Math.round(Math.random() * 2);
        if(matrix[Math.floor(mouseY / side)][Math.floor(mouseX / side)] === 0) {
            matrix[Math.floor(mouseY / side)][Math.floor(mouseX / side)] = "X";
            stugum();

            for(let y = 1;y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                    if(title.innerHTML == "Tic Tac Tio"){
                        if(matrix[y][x] === 0) {
                            while(matrix[oY][oX] !== 0){
                                oX = Math.round(Math.random() * 2);
                                oY = Math.round(Math.random() * 2);
                            }
                            if(matrix[oY][oX] === 0) {
                                return  matrix[oY][oX] = "O";
                            }
                        }
                    }
                }
            }
        }
    }
}
btn.addEventListener("click", refreash);
function refreash() {
    title.innerHTML = "Tic Tac Tio";
    matrix = [
        [0, 0, 0], 
        [0, 0, 0], 
        [0, 0, 0]
    ];
    loop()
}
function stugum() {
    if(matrix[0][0] == "O" && matrix[1][1] == "O" && matrix[2][2] == "O") {
        title.innerHTML = "O is winner";
    } else if(matrix[0][0] == "O" && matrix[1][0] == "O" && matrix[2][0] == "O"){
        title.innerHTML = "O is winner";
    } else if(matrix[0][1] == "O" && matrix[1][1] == "O" && matrix[2][1] == "O"){
        title.innerHTML = "O is winner";
    } else if(matrix[0][2] == "O" && matrix[1][2] == "O" && matrix[2][2] == "O"){
        title.innerHTML = "O is winner";
    } else if(matrix[0][2] == "O" && matrix[1][1] == "O" && matrix[2][0] == "O"){
        title.innerHTML = "O is winner";
    } else if(matrix[0][0] == "O" && matrix[0][1] == "O" && matrix[0][2] == "O"){
        title.innerHTML = "O is winner";
    } else if(matrix[1][0] == "O" && matrix[1][1] == "O" && matrix[1][2] == "O"){
        title.innerHTML = "O is winner";
    } else if(matrix[2][0] == "O" && matrix[2][1] == "O" && matrix[2][2] == "O"){
        title.innerHTML = "O is winner";
    }
    if(matrix[0][0] == "X" && matrix[1][1] == "X" && matrix[2][2] == "X") {
        title.innerHTML = "X is winner";
    } else if(matrix[0][0] == "X" && matrix[1][0] == "X" && matrix[2][0] == "X"){
        title.innerHTML = "X is winner";
    } else if(matrix[0][1] == "X" && matrix[1][1] == "X" && matrix[2][1] == "X"){
        title.innerHTML = "X is winner";
    } else if(matrix[0][2] == "X" && matrix[1][2] == "X" && matrix[2][2] == "X"){
        title.innerHTML = "X is winner";
    } else if(matrix[0][2] == "X" && matrix[1][1] == "X" && matrix[2][0] == "X"){
        title.innerHTML = "X is winner";
    } else if(matrix[0][0] == "X" && matrix[0][1] == "X" && matrix[0][2] == "X"){
        title.innerHTML = "X is winner";
    } else if(matrix[1][0] == "X" && matrix[1][1] == "X" && matrix[1][2] == "X"){
        title.innerHTML = "X is winner";
    } else if(matrix[2][0] == "X" && matrix[2][1] == "X" && matrix[2][2] == "X"){
        title.innerHTML = "X is winner";
    }
}
function setup() {
    frameRate(60);
    let canvas = createCanvas(300, 300);
    canvas.parent("#canvas");
    return canvas

}


function draw() {
    background("white");
    stugum()
    if(title.innerHTML !== "Tic Tac Tio") {
        if(title.innerHTML == "X is winner"){
            result.x++;
        } else if(title.innerHTML == "O is winner") {
            result.o++;
        }
        noLoop();
    }

    resultHx.innerHTML = `X:${result.x}`
    resultHo.innerHTML = `O:${result.o}`
    for(let y = 0;y < matrix.length; y++) {
        for(let x = 0;x < matrix[y].length; x++){
                fill(144, 146, 150)
                // console.log(canvas.height)
                strokeWeight(4)
                stroke("white")
                rect(x * side, y * side,side,side,10);
                if(matrix[y][x] == "X"){
                    textSize(40);
                    fill("white")
                    stroke("black")
                    text('X', x * side + side / 2 - 10,y * side + side / 2 + 10);
                }  else if(matrix[y][x] == "O") {
                    fill("white")
                    stroke("black")

                    text('0', x * side + side / 2 - 10,y * side + side / 2 + 10);
                }
        }
    }

}