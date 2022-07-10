
// Dark mode

function swapStyleSheet() {
    // Obtains an array of all <link>
    // elements.
    // Select your element using indexing.
var theme = document.getElementById('estilo');
console.log(theme);

    // Change the value of href attribute 
    // to change the css sheet.
    if (theme.getAttribute('href') == './style2.css') {
        theme.setAttribute('href', './style.css');
    } else {
        theme.setAttribute('href', './style2.css');
    }
}