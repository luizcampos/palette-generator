const buttonGenerate = document.querySelector("#btnGenerate");
buttonGenerate.addEventListener("click", generate);

function generate(){

    let color = "";
    let dropDownColors = document.querySelector('#numberOfColors'); //numberOfColors
    let number = dropDownColors.options[dropDownColors.selectedIndex].value;

    let typeColors = document.querySelector('#typePalette'); //typeColors
    let nameType = typeColors.options[typeColors.selectedIndex].value;

    const sectionHide = document.querySelector("#palettes-divs");
    sectionHide.innerHTML = "";

    const palettes = [
        ["#fcd8af","#fec49b","#fe9b91","#fd6084","#045071"],
        ["#4d3b36","#eb613b","#f98f6f","#c1d9cd","#f7eadc"],
        ["#eff3cd","#b2d5ba","#61ada0","#248f8d","#605063"],
        ["#c7fcd7","#d9d5a7","#d9ab91","#e6867a","#ed4a6a"],
        ["#ffe181","#eee9e5","#fad3b2","#ffba7f","#ff9c97"],
        ["#655643","#80bca3","#f6f7bd","#e6ac27","#bf4d28"],
        ["#fc354c","#29221f","#13747d","#0abfbc","#fcf7c5"],
        ["#ffaf90","#ffd37a","#002f7c","#006583","#00a492"],
        ["#ea4c73","#ef8465","#f1c47b","#f8efad","#f8efd7"],
        ["#592E0B","#DF985E","#D9701A","#593D25","#A65614"]
    ]

    const palettesMonochromatic = [
        ["#690d6e","#590a5e","#4a074e","#3a033e","#2a002e"],
        ["#06731b","#238c32","#41a449","#5ebd5f","#7bd576"],
        ["#72bdeb","#8ccef0","#a7def5","#c1effa","#dbffff"],
        ["#dae4bd","#c8d2ab","#b5bf9a","#a3ad88","#909a76"],
        ["#9e041e","#b62133","#cf3e48","#e75b5c","#ff7871"],
        ["#b007ce","#c428da","#d848e7","#eb69f3","#ff89ff"],
        ["#df3d06","#e7571f","#ef7137","#f78a50","#ffa468"],
        ["#7c5515","#6c4610","#5b370b","#4b2805","#3a1900"],
        ["#ca847c","#d79d94","#e5b6ad","#f2cec5","#ffe7dd"],
        ["#7877b1","#918fc5","#aaa7d8","#c2bfec","#dbd7ff"],
        ["#7877b1","#244c5a","#183d4b","#0c2e3b","#001f2b"]
    ]

    var div = document.createElement('div');
    div.classList.add("color-palette");

    if(nameType=="monochromatic"){
        color = Math.floor(Math.random() * palettesMonochromatic.length);
    } else{
        color = Math.floor(Math.random() * palettes.length);
    }

    for(var i=0; i < number; i++){
        if(nameType=="monochromatic"){
            div.style.backgroundColor = palettesMonochromatic[color][i];
            div.textContent = palettesMonochromatic[color][i];
        } else{
            div.style.backgroundColor = palettes[color][i];
            div.textContent = palettes[color][i];
        }
        
        sectionHide.append(div);
        sectionHide.innerHTML += "<br/>";
    }

}