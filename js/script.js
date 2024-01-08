
function myFunction() {
  var x = document.getElementById("mobile-nav");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


function closeNav() {
  document.getElementById("mobile-nav").style.display = "none";
  
}
