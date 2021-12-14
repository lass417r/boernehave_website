/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "inline") {
    x.style.display = "none";
  } else {
    x.style.display = "inline";
  }
}

function myMenuKnap(x) {
  x.classList.toggle("change");
}

var x = window.matchMedia("(max-width: 750px)");
x.addListener(myMenu); // Attach listener function on state changes
