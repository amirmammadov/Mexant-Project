const navLinksEl = document.querySelector("[data-nav-links]");
const dropdownEl = document.querySelector("[data-dropdown]");
const dropdownContentEl = document.querySelector("[data-dropdown-content]");
const carouselContainer = document.querySelector("[data-carousel]");
const aboutHeroContainer = document.querySelector("[data-hero]");
const navMenuEl = document.querySelector("[data-nav-menu]");
const navElement = document.querySelector("[data-nav]");
const currentYear = document.querySelector("[data-currentYear]");

let windowInnerWidth = window.innerWidth;
let heightOfNav = navElement.getBoundingClientRect().height;

//Enable nav menu when we are scrolling the page
window.addEventListener("scroll", () => {
  //scroll case based on x axis
  let scrollPosY = window.scrollY;
  if (scrollPosY >= 500) {
    navElement.classList.add("active-nav");
    navElement.style.transition = "all .5s linear";
  } else {
    navElement.classList.remove("active-nav");
  }

  if (windowInnerWidth >= 768) {
    navLinksEl.classList.remove("active-nav-link");
    navMenuEl.classList.remove("active-menu");
  }
});

//Add "active" classes to the nav-links and dropdown element
dropdownEl.addEventListener("click", (e) => {
  if (dropdownEl.classList.contains("active-dropdown")) {
    dropdownEl.classList.remove("active-dropdown");
  } else {
    dropdownEl.classList.add("active-dropdown");
  }
});

dropdownContentEl.addEventListener("mouseout", (e) => {
  if (window.innerWidth > 768) {
    dropdownEl.classList.remove("active-dropdown");
  }
});

dropdownContentEl.addEventListener("mouseover", (e) => {
  dropdownEl.classList.add("active-dropdown");
});

navMenuEl.addEventListener("click", (e) => {
  if (navLinksEl.classList.contains("active-nav-link")) {
    navLinksEl.classList.remove("active-nav-link");
    navMenuEl.classList.remove("active-menu");
  } else {
    navLinksEl.classList.add("active-nav-link");
    navMenuEl.classList.add("active-menu");
  }
});

//Arrange the current year for footer section
const year = new Date().getFullYear();
currentYear.textContent = year;

//Set background image for carousel bases on initial downloading
window.onload = () => {
  aboutHeroContainer.style.marginTop = `-${heightOfNav}px`;
};
