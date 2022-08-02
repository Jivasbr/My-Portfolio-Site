// About-me Accordion

var accordionMenu = function () {
            
  /**
  * Element.closest() polyfill
  * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
  */
  if (!Element.prototype.closest) {
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
    Element.prototype.closest = function (s) {
      var el = this;
      var ancestor = this;
      if (!document.documentElement.contains(el)) return null;
      do {
        if (ancestor.matches(s)) return ancestor;
        ancestor = ancestor.parentElement;
      } while (ancestor !== null);
      return null;
    };
  }

  // Listen for click on the document
  // Accordiom menu functionality
  document.addEventListener('click', function (event) {

    // Bail if our clicked element doesn't match
    var trigger = event.target.closest('[data-accordion-menu]');
    if (!trigger) return;

    // Get the target content
    var target = document.querySelector(trigger.hash);
    if (!target) return;

    // Prevent default link behavior
    event.preventDefault();

    // Toggle our content
    target.classList.toggle('accordion-menu--hidden');

    // Toggle trigger class
    trigger.classList.toggle('accordion-menu--active');
  });

  // Listen for click on the document
  // Accordion parent menu functionality
  document.addEventListener('click', function (event) {

    // Bail if our clicked element doesn't match
    var trigger = event.target.closest('[data-accordion-menu-nav]');
    if (!trigger) return;

    // Get the target content
    var target = document.querySelector(trigger.hash);
    if (!target) return;

    // Prevent default link behavior
    event.preventDefault();

    // If the content is already expanded, collapse it and quit
    if (target.classList.contains('active')) {
      target.classList.remove('active');
      return;
    }
    
    // Get all open accordion content, loop through it, and close it
    var accordions = document.querySelectorAll('[data-accordion-wrapper]');
    for (var i = 0; i < accordions.length; i++) {
      accordions[i].classList.remove('active');
    }
    
    // Toggle our content
    target.classList.toggle('active');
  });

};

accordionMenu();



// Dark mode

function swapStyleSheet() {
    // Obtains an array of all <link>
    // elements.
    // Select your element using indexing.
var theme = document.getElementById('estilo');
console.log(theme);

    // Change the value of href attribute 
    // to change the css sheet.
    if (theme.getAttribute('href') == './assets/css/style2.css') {
        theme.setAttribute('href', './assets/css/style.css');
    } else {
        theme.setAttribute('href', './assets/css/style2.css');
    }
}




// Tab

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
    evt.currentTarget.firstElementChild.className += " active";
  }



// About Final Tab

function openAccordionLink(evt, AccordionName) {
  var i, tabaccordioncontent, linkside;

  tabaccordioncontent = document.getElementsByClassName("tabaccordioncontent");
  for (i = 0; i < tabaccordioncontent.length; i++) {
    tabaccordioncontent[i].style.display = "none";
  }
  linkside = document.getElementsByClassName("linkside");
  for (i = 0; i < linkside.length; i++) {
    linkside[i].className = linkside[i].className.replace(" active", "");
  }
  document.getElementById(AccordionName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " active";
}




// Typewriter effect

function setupTypewriter(t) {
  var HTML = t.innerHTML;

  t.innerHTML = "";

  var cursorPosition = 0,
      tag = "",
      writingTag = false,
      tagOpen = false,
      typeSpeed = 50,
      tempTypeSpeed = 0;

  var type = function () {

      if (writingTag === true) {
          tag += HTML[cursorPosition];
      }

      if (HTML[cursorPosition] === "<") {
          tempTypeSpeed = 0;
          if (tagOpen) {
              tagOpen = false;
              writingTag = true;
          } else {
              tag = "";
              tagOpen = true;
              writingTag = true;
              tag += HTML[cursorPosition];
          }
      }
      if (!writingTag && tagOpen) {
          tag.innerHTML += HTML[cursorPosition];
      }
      if (!writingTag && !tagOpen) {
          if (HTML[cursorPosition] === " ") {
              tempTypeSpeed = 0;
          }
          else {
              //tempTypeSpeed = (Math.random() * typeSpeed) + 50;
  tempTypeSpeed = 50;
          }
          t.innerHTML += HTML[cursorPosition];
      }
      if (writingTag === true && HTML[cursorPosition] === ">") {
          //tempTypeSpeed = (Math.random() * typeSpeed) + 50;
  tempTypeSpeed = 50;
          writingTag = false;
          if (tagOpen) {
              var newSpan = document.createElement("span");
              t.appendChild(newSpan);
              newSpan.innerHTML = tag;
              tag = newSpan.firstChild;
          }
      }

      cursorPosition += 1;
      if (cursorPosition < HTML.length - 1) {

          setTimeout(type, tempTypeSpeed);
      }

if(cursorPosition == HTML.length - 1){
  setTimeout(reinit, 10000);
}


  };

  return {
      type: type
  };}

var typer = document.getElementById('typewriter');

typewriter = setupTypewriter(typer);

typewriter.type();



function reinit(){

typewriter = setupTypewriter(typer);

typewriter.type();
}



// Mirror Text Contact Form

var input1 = document.getElementById('input1','input2','input3');
var mirror1 = document.getElementById('mirror1','mirror2','mirror3');

input1.addEventListener('input', function(event) {
  mirror1.innerText = event.target.value.split('').join('');
});

input2.addEventListener('input', function(event) {
  mirror2.innerText = event.target.value.split('').join('');
});

input3.addEventListener('input', function(event) {
  mirror3.innerText = event.target.value.split('').join('');
});

// Data
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();


// Checkbox

function boxOpen(x,y) {
  // Get the checkbox
  var checkBox = document.getElementById(x);
  // Get the output text
  var box = document.getElementById(y);

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    box.style.display = "flex";
  } else {
    box.style.display = "none";
  }
}