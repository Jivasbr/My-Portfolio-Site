
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



function openMenuLink(evt, menuName) {
    var i, tabcontent, linktopo;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    linktopo = document.getElementsByClassName("linktopo");
    for (i = 0; i < linktopo.length; i++) {
        linktopo[i].className = linktopo[i].className.replace(" active", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " active";
}

