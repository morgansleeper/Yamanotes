/* Adapted from https://www.w3schools.com/howto/howto_js_dropdown.asp */

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content, and shrink the header
if at the top of the page */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  if (window.pageYOffset <= 50) {
    document.getElementById("shrinkHeader").style.fontSize = "2vw";
  }
}


// Close the dropdown menu if the user clicks outside of it
// Restore header size if @ top of page
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    if ((window.pageYOffset <= 50) &&
    document.getElementById("shrinkHeader").style.fontSize == "2vw") {
      document.getElementById("shrinkHeader").style.fontSize = "6vw";
      }
  }
}
