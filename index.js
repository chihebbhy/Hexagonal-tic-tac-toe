const parent = document.getElementById("map");
for (let j = 0; j < 30; j++) {
    let row = document.createElement("div");
    row.classList.add('row',`row${j}`);
    parent.appendChild(row);
    for (let i = 0; i < 30; i++) {
        let hex = document.createElement("div");
        hex.classList.add('hex', `hex${j}${i}`);
        hex.addEventListener('click', Click);

        row.appendChild(hex);
        let top = document.createElement("div");
        let mid = document.createElement("div");
        let bot = document.createElement("div");
        top.classList.add('top', `top${j}${i}`);
        mid.classList.add('mid', `mid${j}${i}`);
        bot.classList.add('bot', `bot${j}${i}`);
        hex.appendChild(top);
        hex.appendChild(mid);
        hex.appendChild(bot);
    }
}

function Click(e){
    alert(e.target.classList);
}