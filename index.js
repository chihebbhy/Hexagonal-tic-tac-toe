const parent = document.getElementById("map");
for (let j = 0; j < 10; j++) {
    let row = document.createElement("div");
    row.classList.add('row',`row${j}`);
    parent.appendChild(row);
    for (let i = 0; i < 11; i++) {
        let hex = document.createElement("div");
        hex.classList.add('hex', `hex${i}`);
        row.appendChild(hex);
        let top = document.createElement("div");
        let mid = document.createElement("div");
        let bot = document.createElement("div");
        top.classList.add('top', `top${i}`);
        mid.classList.add('mid', `mid${i}`);
        bot.classList.add('bot', `bot${i}`);
        hex.appendChild(top);
        hex.appendChild(mid);
        hex.appendChild(bot);
    }
}