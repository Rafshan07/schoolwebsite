// Function to load dynamic content
function loadComponent(elementId, filePath) {
  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
      setActiveNav(); // Ensure active nav item after loading
    })
    .catch((error) => console.error(`Error loading ${filePath}:`, error));
}

// Function to set active navigation item
function setActiveNav() {
  const navLinks = document.querySelectorAll(".nav-link");
  const currentPage = window.location.pathname.split("/").pop(); // Get the current page name

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");

    if (linkPath === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Scroll event to change navbar color dynamically
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Load header and footer on page load
document.addEventListener("DOMContentLoaded", function () {
  loadComponent("header-placeholder", "./component/header.html");
  loadComponent("footer-placeholder", "./component/footer.html");

  // Listen for clicks on the navigation links
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default link behavior
      const href = link.getAttribute("href");

      // Use the loadComponent function to load the page content dynamically
      loadComponent("content-placeholder", href);

      // Update the browser's URL without reloading the page
      window.history.pushState({ path: href }, "", href);

      // Set active nav after content loads
      setActiveNav();
    });
  });

  // Handle back/forward browser navigation
  window.addEventListener("popstate", function (event) {
    const currentPage = window.location.pathname.split("/").pop();
    loadComponent("content-placeholder", currentPage);
    setActiveNav();
  });
});











