const parent = document.getElementById("map");
for (let i = 0; i < 2; i++) {
    let top = document.createElement("div");
    let mid = document.createElement("div");
    let bot = document.createElement("div");
    top.classList.add('top','${i}');
    mid.classList.add('mid','${i}');
    bot.classList.add('bot','${i}');
    parent.appendChild(top);
    parent.appendChild(mid);
    parent.appendChild(bot);
}   