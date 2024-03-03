let body = document.body;
let colorText = document.getElementById('colorText');
let changeColorBtn = document.getElementById('changeColor');

let generateRandomHexValue = () => {
    let val = Math.round(Math.random() * 15);
    val = (val > 9) ? String.fromCharCode('a'.charCodeAt(0) + val - 10) : val;
    return val;
};


let generateRandomColor = () => {
    let color = '#'
    for (const _ of Array(6)) {
        color += generateRandomHexValue();
    }
    return color
}

let changeColor = () => {
    let generatedColor = generateRandomColor()
    body.style.backgroundColor = generatedColor;
    colorText.textContent = generatedColor;
}

changeColorBtn.onclick = ()=>{
    changeColor()
};


changeColor()

