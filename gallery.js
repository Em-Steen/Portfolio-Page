
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