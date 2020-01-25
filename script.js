$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

function openNav() {
  var navbar = document.getElementById("navbar");

  if (navbar.style.display === "none") {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
}
