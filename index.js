const parent = document.getElementById("map");
const height = 30;
const width = 30;
let map = [];
let turn = 0;
let toPlay = "X";
function createHex() {
    for (let j = 0; j < height; j++) {
        // Create a row
        map[j] = [];
        let row = document.createElement("div");
        row.classList.add('row', `row${j}`);
        parent.appendChild(row);
        for (let i = 0; i < width; i++) {
            // Create a hex
            map[j][i] = "";
            let hex = document.createElement("div");
            hex.classList.add('hex', `hex${j}|${i}`);
            hex.dataset.row = j;
            hex.dataset.col = i;
            hex.addEventListener('click', Click);
            row.appendChild(hex);
            // Create the 3 parts of the hex
            let top = document.createElement("div");
            let mid = document.createElement("div");
            let bot = document.createElement("div");
            top.classList.add('top', `top${j}|${i}`);
            mid.classList.add('mid', `mid${j}|${i}`);
            bot.classList.add('bot', `bot${j}|${i}`);
            hex.appendChild(top);
            hex.appendChild(mid);
            hex.appendChild(bot);
        }
    }
}
function Click(e) {
    const hex = e.currentTarget;
    let row = hex.dataset.row;
    let col = hex.dataset.col;
    if (hex.classList.contains("played")) {
        return;
    }
    // "XOOXXOOXXOOXXOO..."
    // "0oo34oo78oo..."
    if (turn == 0 || turn % 4 == 0 || turn % 4 == 3) {
        // X's turn
        toPlay = "X"
        
        turn++;
    } else {
        // O's turn
        toPlay = "O"
        turn++;
    }
    Write(toPlay, row, col);
}

function Write(player, row, col) {
    const hex = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);

    const top = hex.querySelector('.top');
    const mid = hex.querySelector('.mid');
    const bot = hex.querySelector('.bot');

    map[row][col] = player;
    const color = player === "X" ? "#C66" : "#66C";
    const color2 = player === "X" ? "#66C" : "#C66";

    top.style.borderBottomColor = color;
    mid.style.backgroundColor = color;
    mid.style.color = color2;
    bot.style.borderTopColor = color;
    mid.innerHTML = player;

    hex.classList.add("played");
    if (GameEnded()) {
        alert(`${player} wins!`);
    }
}

function StartGame() {
    createHex();
}

function GameEnded(Player) {
    console.log(map);
    return turn > 20;
}
StartGame();