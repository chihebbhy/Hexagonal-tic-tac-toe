const parent = document.getElementById("map");
const height = 50;
const width = 50;
const winCount = 6;
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
            hex.classList.add('hex', `hex${j}/${i}`);
            hex.dataset.row = j;
            hex.dataset.col = i;
            hex.addEventListener('click', Click);
            row.appendChild(hex);
            // Create the 3 parts of the hex
            let top = document.createElement("div");
            let mid = document.createElement("div");
            let bot = document.createElement("div");
            top.classList.add('top', `top${j}/${i}`);
            mid.classList.add('mid', `mid${j}/${i}`);
            bot.classList.add('bot', `bot${j}/${i}`);
            hex.appendChild(top);
            hex.appendChild(mid);
            hex.appendChild(bot);
        }
    }
}
function Click(e) {
    const hex = e.currentTarget;
    let row = parseInt(hex.dataset.row);
    let col = parseInt(hex.dataset.col);
    if (hex.classList.contains("played")) {
        return;
    }
    // "XOOXXOOXXOOXXOO..."
    if (turn == 0 || (turn % 4) == 0 || (turn % 4) == 3) {
        // X's turn
        toPlay = "X"
        turn++;
    } else {
        // O's turn
        toPlay = "O"
        turn++;
    }
    // Write the player's symbol on the hex
    Write(toPlay, row, col);

    // Check if the player won
    if (CheckWin(toPlay, row, col)) {
        alert(`${toPlay} wins!`);
    }
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

}


function CheckWin(Player, row, col) {
    const pairs = [
        [[-1, -1], [1, 0]], // top-left ↔ bottom-right
        [[-1, 0], [1, -1]],  // top-right ↔ bottom-left
        [[0, -1], [0, 1]]   // left ↔ right
    ];
    for (const [dir1, dir2] of pairs) {
        let count = 1;
        let r = row;
        let c = col;
        let i = 1;
        while (true) {
            const even = r % 2 === 0;
            const [dr, dc] = even ? dir1 : [dir1[0], dir1[1] + (dir1[0] !== 0 ? 1 : 0)]; // adjust odd row
            r += dr;
            c += dc;
            if (r < 0 || r >= height || c < 0 || c >= width) break;
            if (map[r][c] == Player) count++
            else break;
            if (count >= 6) break;
        }
        r = row; c = col;
        while (true) {
            const even = r % 2 === 0;
            const [dr, dc] = even ? dir2 : [dir2[0], dir2[1] + (dir2[0] !== 0 ? 1 : 0)];
            r += dr;
            c += dc;
            if (r < 0 || r >= height || c < 0 || c >= width) break;
            if (map[r][c] == Player) count++
            else break;
            if (count >= 6) break;
        }
        if (count >= winCount) return true;

    }
    return false;
}

/*
function getNeighbors(row, col) {
    const neighbors = [];
    const even = row % 2 === 0;

    const directions = even
        ? [[-1, -1], [-1, 0], [0, -1], [0, 1], [1, -1], [1, 0]] // even row
        : [[-1, 0], [-1, 1], [0, -1], [0, 1], [1, 0], [1, 1]];  // odd row

    for (const [dr, dc] of directions) {
        const nr = row + dr;
        const nc = col + dc;

        if (nr >= 0 && nr < height && nc >= 0 && nc < width) {
            neighbors.push([nr, nc]);
        }
    }

    return neighbors;
}

function areNeighbors(row1, col1, row2, col2) {
    if (row1 == row2 && col1 == col2) return false; // same hex
    if (row1 < 0 || row1 >= height || col1 < 0 || col1 >= width) return false; // out of bounds
    if (row2 < 0 || row2 >= height || col2 < 0 || col2 >= width) return false; // out of bounds

    const dr = row2 - row1; // 3 - 2 = 1
    const dc = col2 - col1; // 1 - 2 = -1

    if (dr == 0) return Math.abs(dc) == 1;

    if (dr == 1) return (row1 % 2 == 0) ? (dc == 0 || dc == 1) : (dc == 0 || dc == -1);

    if (dr == -1) return (row2 % 2 == 0) ? (dc == 0 || dc == 1) : (dc == 0 || dc == -1);

}

*/


// Scroll the center hex into view
function centerView() {
    const row = Math.round(height / 2);
    const col = Math.round(width / 2);

    const hex = document.querySelector(
        `[data-row="${row}"][data-col="${col}"]`
    );

    const mid = hex.querySelector('.mid');

    mid.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
    });
}

function StartGame() {
    createHex();
    centerView();
}


StartGame();

