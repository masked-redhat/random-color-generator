/**
 * Generates random color in Hex format
 * @function generateRandomColor
 * @returns {String}  Properly formatted Hex color code
 */
let generateRandomColor = () => {
    let hexCode = Math.ceil(Math.random() * 16777215).toString(16);
    return '#' + (hexCode.length == 6 ? '' : '0') + hexCode;
}

/**
 * Changes bgcolor in body and text in the text container
 * @function changeColor
 * @returns {undefined} Nothing
 */
let changeColor = () => {
    let generatedColor = generateRandomColor()
    body.style.backgroundColor = generatedColor;
    colorText.textContent = generatedColor;

}

// Targetting elements that will be used in changing the colors
let body = document.body;
let colorText = document.getElementById('colorText');
let changeColorBtn = document.getElementById('changeColor');

changeColorBtn.onclick = () => {
    changeColor()
};

// Initial Change/application of the color
// app initialization
changeColor()

