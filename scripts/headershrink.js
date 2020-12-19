// When the user scrolls down 50px from the top of the document, resize the header's font size
// from https://www.w3schools.com/howto/howto_js_shrink_header_scroll.asp

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("shrinkHeader").style.fontSize = "2vw";
  } else {
    document.getElementById("shrinkHeader").style.fontSize = "6vw";
  }
} 
