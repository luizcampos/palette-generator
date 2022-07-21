const buttonGenerate = document.querySelector("#btnGenerate");
buttonGenerate.addEventListener("click", generate);

function generate(){
    const sectionHide = document.querySelector("#palettes-divs");
    sectionHide.innerHTML = "";

    const palettes = [
        ["#fcd8af","#fec49b","#fe9b91","#fd6084","#045071"],
        ["#4d3b36","#eb613b","#f98f6f","#c1d9cd","#f7eadc"],
        ["#eff3cd","#b2d5ba","#61ada0","#248f8d","#605063"],
        ["#0ab4f7","#08a3e4","#0591d1","#0380be","#006eab"],
        ["#ffe181","#eee9e5","#fad3b2","#ffba7f","#ff9c97"],
        ["#655643","#80bca3","#f6f7bd","#e6ac27","#bf4d28"],
        ["#fc354c","#29221f","#13747d","#0abfbc","#fcf7c5"],
        ["#ffaf90","#ffd37a","#002f7c","#006583","#00a492"],
        ["#ea4c73","#ef8465","#f1c47b","#f8efad","#f8efd7"],
        ["#592E0B","#DF985E","#D9701A","#593D25","#A65614"]
    ]
    const color = Math.floor(Math.random() * palettes.length);

    var div = document.createElement('div');
    div.classList.add("color-palette");

    for(var i=0; i < 5; i++){
        div.style.backgroundColor = palettes[color][i];
        div.textContent = palettes[color][i];
        sectionHide.append(div);
        sectionHide.innerHTML += "<br/>";
    }

}