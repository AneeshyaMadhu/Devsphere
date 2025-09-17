// Toggle Mobile Menu
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});

// Dropdown on Logo
const logo = document.querySelector('.logo');
const dropdown = document.querySelector('.logo-dropdown');

logo.addEventListener('click', () => {
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (e) => {
  if (!logo.contains(e.target)) {
    dropdown.style.display = 'none';
  }
});

// Banner Slides
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector(".slides");
  const slideCount = document.querySelectorAll(".slide").length;
  let currentIndex = 0;
  const intervalTime = 7000;

  function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  let autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % slideCount;
    showSlide(currentIndex);
  }, intervalTime);

  // Swipe support
  let startX = 0;

  document.querySelector('.banner').addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    clearInterval(autoSlide);
  });

  document.querySelector('.banner').addEventListener('touchend', e => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) currentIndex = (currentIndex + 1) % slideCount;
    else if (endX - startX > 50) currentIndex = (currentIndex - 1 + slideCount) % slideCount;

    showSlide(currentIndex);

    autoSlide = setInterval(() => {
      currentIndex = (currentIndex + 1) % slideCount;
      showSlide(currentIndex);
    }, intervalTime);
  });
});

// 🌙 Dark Mode Toggle
const toggleBtn = document.getElementById("mode-toggle");
const modeIcon = document.getElementById("mode-icon");
const body = document.body;

const sunSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFC107" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="5"/>
    <g stroke="#FFC107" stroke-width="2">
      <line x1="12" y1="1" x2="12" y2="4"/>
      <line x1="12" y1="20" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/>
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="4" y2="12"/>
      <line x1="20" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/>
      <line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/>
    </g>
  </svg>
`;

const moonSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFD43B" viewBox="0 0 24 24">
    <path d="M21 12.79A9 9 0 0111.21 3 7 7 0 1019 14.79a9.05 9.05 0 012 2z"/>
  </svg>
`;

// Load saved theme on page load
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  modeIcon.innerHTML = sunSVG;
} else {
  body.classList.remove("dark-mode");
  modeIcon.innerHTML = moonSVG;
}

// Toggle dark mode on click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    modeIcon.innerHTML = sunSVG;
    localStorage.setItem("theme", "dark");
  } else {
    modeIcon.innerHTML = moonSVG;
    localStorage.setItem("theme", "light");
  }
});
