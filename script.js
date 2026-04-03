// ================================
// MOBILE MENU TOGGLE
// ================================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ================================
// CLOSE MENU WHEN LINK IS CLICKED
// ================================
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// ================================
// HEADER SHADOW ON SCROLL
// ================================
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.35)";
  } else {
    header.style.boxShadow = "none";
  }
});

// ================================
// SCROLL REVEAL ANIMATION
// ================================
const reveals = document.querySelectorAll(".reveal");

function revealSections() {
  const windowHeight = window.innerHeight;

  reveals.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const revealPoint = 120;

    if (sectionTop < windowHeight - revealPoint) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// ================================
// ACTIVE NAV LINK ON SCROLL
// ================================
const sections = document.querySelectorAll("section");
const navAllLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 140;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navAllLinks.forEach(link => {
    link.classList.remove("active-link");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active-link");
    }
  });
});