//Have a clickable button on each card that opens and closes the description text

//need to amend function to make <p> hidden if visible
//need to refactor so that I have one function for all button class, not for individual buttons


//4 refactor

let button1 = document.getElementById("button1");

function toggleText() {
    if (document.getElementById("description-1").style.visibility='hidden') {
        document.getElementById("description-1").style.visibility='visible';
    } else {
        document.getElementById("description-1").style.visibility='hidden';
        }
    }

button1.addEventListener('click', toggleText);
