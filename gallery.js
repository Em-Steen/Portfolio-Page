//Have a clickable button on each card that opens and closes the description text

//need to refactor so that I have one function for all button class, not for individual buttons

//this function may help to refactor to make function apply to all buttons, but currently not working in this state
//function toggleText(e) {
    //if (e.target.parentElement.lastChild.style.visibility == 'hidden') {
       // e.target.parentElement.lastChild.style.visibility='visible';
        //} else {
          //e.target.parentElement.lastChild.style.visibility='hidden';
        //}
       //}

//4 refactor

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");

function toggleText1() {
  if (document.getElementById("description-1").style.visibility == 'hidden') {
    document.getElementById("description-1").style.visibility='visible';
    } else {
        document.getElementById("description-1").style.visibility='hidden';
    }
   }

   function toggleText2() {
    if (document.getElementById("description-2").style.visibility == 'hidden') {
      document.getElementById("description-2").style.visibility='visible';
      } else {
          document.getElementById("description-2").style.visibility='hidden';
      }
     }

     function toggleText3() {
        if (document.getElementById("description-3").style.visibility == 'hidden') {
          document.getElementById("description-3").style.visibility='visible';
          } else {
              document.getElementById("description-3").style.visibility='hidden';
          }
         }

         function toggleText4() {
            if (document.getElementById("description-4").style.visibility == 'hidden') {
              document.getElementById("description-4").style.visibility='visible';
              } else {
                  document.getElementById("description-4").style.visibility='hidden';
              }
             }

button1.addEventListener('click', toggleText1);
button2.addEventListener('click', toggleText2);
button3.addEventListener('click', toggleText3);
button4.addEventListener('click', toggleText4);