// ── THEME ──
const html = document.documentElement;
const toggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme") || "dark";
html.setAttribute("data-theme", savedTheme);

toggle.addEventListener("click", () => {
  const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

// ── YEAR ──
document.getElementById("year").textContent = new Date().getFullYear();

// ── SCROLL REVEAL ──
const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 },
);

revealEls.forEach((el) => observer.observe(el));

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});

// Close menu when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});
