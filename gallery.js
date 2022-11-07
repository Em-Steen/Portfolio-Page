//Have a clickable button on each card that opens and closes the description text

//1 create button in html DONE
//2 hide description text in html DONE, but I could also set this visible in CSS - maybe easier?
//3 write JS that makes description text visible when button is clicked
// - create variable for hidden text
// - create function that makes <p> = visible when button is clicked
// - link that function to the html

//4 refactor

let p = document.getElementById("description-1");
let button = document.getElementById("button");

function showText() {
 //   p = visible in either html or CSS
}

button.addEventListener('click', showText);
