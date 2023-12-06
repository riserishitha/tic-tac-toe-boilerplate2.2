var resultdiv = document.getElementById('result');
var Boxes = document.querySelectorAll(".box");
var reply = document.getElementById('message');
var playbt = document.getElementById("button");

let alloutcomes = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];
for (button of Boxes) {
    button.addEventListener('click', chancegiven)
}
let playerwonornot = false;
let xchance = [];
let ochance = [];

let clicked = 0;

function chancegiven(event) {
    let ink = Array.from(Boxes).indexOf(event.target) + 1;
    clicked = clicked + 1;

    let eachbox = Boxes[ink - 1];

    let creatptag = document.createElement('p');
    creatptag.style.color = "#FAB201";
    eachbox.appendChild(creatptag);
    eachbox.style.pointerEvents = 'none';

    if (clicked % 2 == 0) {
        creatptag.innerText = "X";
        xchance.push(ink);
        Result('X', xchance);
    } else {
        creatptag.innerText = "O";
        ochance.push(ink);
        Result('O', ochance);
    }

    if (clicked == 9 && playerwonornot == false) {
        resultdiv.style.visibility = 'visible';
        reply.innerText = "Match Is A Draw";
    }
}

function Result(playingplayer, theirarray) {
    for (let j = 0; j < 8; j++) {
        let out = 0;

        for (let k = 0; k < 3; k++) {
            if (theirarray.includes(alloutcomes[j][k])) {
                out = out + 1;
            }
        }
        if (out == 3) {
            playerwonornot = true;
            resultdiv.style.visibility = "visible";
            reply.innerText = playingplayer + " Has Won The Match!!";
        }
    }
}

playbt.addEventListener("click", function () {
    window.location.reload();
});
