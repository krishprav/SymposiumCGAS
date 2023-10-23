// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}

// Setting the height of the hero section
document.addEventListener('DOMContentLoaded', function() {
  // Get the height of the navbar
  const navbarHeight = document.getElementById('myNavbar').offsetHeight;
  // Get the hero section
  const heroSection = document.querySelector('.bgimg-1');
  // Set the top and height of the hero section
  heroSection.style.top = `${navbarHeight}px`;
  heroSection.style.height = `calc(100vh - ${navbarHeight}px)`;

  // Get the button by its id
  const learnMoreBtn = document.getElementById("learnMore");
  // Get the target section by its id
  const aboutSection = document.getElementById("about");
  // Attach a click event listener to the button
  learnMoreBtn.addEventListener("click", function() {
    // Use scrollIntoView to scroll to the target section
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  });
});