//Selecting part
const carouselButtons = document.querySelectorAll("[data-carousel-button]");
const tableParent = document.querySelector("[data-table-parent]");
const tableButtons = document.querySelectorAll("[data-table-button]");

const aboutData = [
  {
    id: 1,
    name: "web-design",
    headers: ["Project Title", "Budget", "Deadline", "Client"],
    data: [
      {
        "project-title": "Website Redesign",
        budget: "$2,000 to $5,000",
        estimated: "2022 Nov 28",
        technology: "Web Biz",
      },
      {
        "project-title": "Website Renovation",
        budget: "$1,500 to $3,000",
        estimated: "2022 Nov 18",
        technology: "Online Ads",
      },
      {
        "project-title": "Marketing Plan",
        budget: "$3,000 to $6,000",
        estimated: "2022 Nov 10",
        technology: "Web Biz",
      },
      {
        "project-title": "All-new Website",
        budget: "$1,800 to $4,400",
        estimated: "2022 Nov 3",
        technology: "Web Presence",
      },
    ],
  },
  {
    id: 2,
    name: "graphics",
    headers: ["Project Title", "Budget", "Estimated", "Technology"],
    data: [
      {
        "project-title": "Graphics Redesign",
        budget: "$2,000 to $5,000",
        estimated: "2022 Nov 28",
        technology: "Media One",
      },
      {
        "project-title": "Digital Graphics",
        budget: "$1,500 to $3,000",
        estimated: "2022 Nov 18",
        technology: "Second Media",
      },
      {
        "project-title": "New Artworks",
        budget: "$3,000 to $6,000",
        estimated: "2022 Nov 10",
        technology: "Artwork Push",
      },
      {
        "project-title": "Complex Arts",
        budget: "$1,800 to $4,400",
        estimated: "2022 Nov 3",
        technology: "Media One",
      },
    ],
  },
  {
    id: 3,
    name: "web-coding",
    headers: ["Project Title", "Budget", "Estimated", "Technology"],
    data: [
      {
        "project-title": "Backend Coding",
        budget: "$2,000 to $5,000",
        estimated: "2022 Nov 28",
        technology: "PHP MySQL",
      },
      {
        "project-title": "New Web App",
        budget: "$1,500 to $3,000",
        estimated: "2022 Nov 18",
        technology: "Python Programming",
      },
      {
        "project-title": "Frontend Interactions",
        budget: "$3,000 to $6,000",
        estimated: "2022 Nov 10",
        technology: "JavaScripts",
      },
      {
        "project-title": "Video Creations",
        budget: "$1,800 to $4,400",
        estimated: "2022 Nov 3",
        technology: "Multimedia",
      },
    ],
  },
];

//Set active class for nav items depending on scrolling
const highlightNavItem = () => {
  //Set background image for carousel bases on initial downloading
  carouselContainer.style.backgroundImage = `url(imgs/team2.jpg)`;
  carouselContainer.style.marginTop = `-${heightOfNav}px`;

  const homePage = document.querySelector("#homePage");
  const servicesPage = document.querySelector("#servicesPage");
  const aboutPage = document.querySelector("#aboutPage");
  const testimonialsPage = document.querySelector("#testimonialsPage");
  let scrollPos = window.scrollY;
  console.log(scrollPos);
  if (scrollPos <= 533 && window.innerWidth > 768) {
    servicesPage.classList.remove("active");
    homePage.classList.add("active");
  } else if (scrollPos > 533 && scrollPos < 933 && window.innerWidth > 768) {
    homePage.classList.remove("active");
    aboutPage.classList.remove("active");
    servicesPage.classList.add("active");
  } else if (scrollPos > 1345 && scrollPos < 2100 && window.innerWidth > 768) {
    servicesPage.classList.remove("active");
    testimonialsPage.classList.remove("active");
    aboutPage.classList.add("active");
  } else if (scrollPos > 2970 && scrollPos < 3500 && window.innerWidth > 768) {
    aboutPage.classList.remove("active");
    testimonialsPage.classList.add("active");
  } else {
    homePage.classList.remove("active");
    aboutPage.classList.remove("active");
    servicesPage.classList.remove("active");
    testimonialsPage.classList.remove("active");
  }
};

window.addEventListener("click", highlightNavItem);
window.addEventListener("scroll", highlightNavItem);
window.addEventListener("load", highlightNavItem);

//Carousel Buttons' work case
carouselButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "nex" ? 1 : -1;
    const slides = button
      .closest("[data-carousel-main]")
      .querySelector("[data-carousel-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    carouselContainer.style.backgroundImage = `url(imgs/team${
      newIndex + 1
    }.jpg)`;
    delete activeSlide.dataset.active;
  });
});

//Configuring of the table

const tableIndex = [0];

const table = document.createElement("table");

table.setAttribute("class", "about-table-itself");

table.innerHTML = `<tr class="about-table-row">
<th class="about-table-header">${aboutData[tableIndex].headers[0]}</th>
<th class="about-table-header">${aboutData[tableIndex].headers[1]}</th>
<th class="about-table-header">${aboutData[tableIndex].headers[2]}</th>
<th class="about-table-header">${aboutData[tableIndex].headers[3]}</th>
</tr>
<tr class="about-table-row">
<td class="about-table-text">${aboutData[tableIndex].data[0]["project-title"]}</td>
<td class="about-table-text">${aboutData[tableIndex].data[0]["budget"]}</td>
<td class="about-table-text">${aboutData[tableIndex].data[0]["estimated"]}</td>
<td class="about-table-text">${aboutData[tableIndex].data[0]["technology"]}</td>
</tr>
<tr class="about-table-row">
<td class="about-table-text">${aboutData[tableIndex].data[1]["project-title"]}</td>
<td class="about-table-text">${aboutData[tableIndex].data[1]["project-title"]}</td>
<td class="about-table-text">${aboutData[tableIndex].data[1]["estimated"]}</td>
<td class="about-table-text">${aboutData[tableIndex].data[1]["technology"]}</td>
</tr>
<tr class="about-table-row">
<td class="about-table-text">${aboutData[tableIndex].data[2]["project-title"]}</td>
<td class="about-table-text">${aboutData[tableIndex].data[2]["project-title"]}</td>
<td class="about-table-text">${aboutData[tableIndex].data[2]["estimated"]}</td>
<td class="about-table-text">${aboutData[tableIndex].data[2]["technology"]}</td>
</tr>
<tr class="about-table-row">
<td class="about-table-text">${aboutData[tableIndex].data[3]["project-title"]}</td>
<td class="about-table-text">${aboutData[tableIndex].data[3]["project-title"]}</td>
<td class="about-table-text">${aboutData[tableIndex].data[3]["estimated"]}</td>
<td class="about-table-text">${aboutData[tableIndex].data[3]["technology"]}</td>
</tr>`;

tableParent.appendChild(table);

tableButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    tableButtons.forEach((button) => {
      button.classList.remove("active-table-button");
    });
    if (!button.classList.contains("active-table-button")) {
      button.classList.add("active-table-button");
    }
    button.style.transition = "all .2s linear";
    console.log(tableIndex);
    tableIndex[0] = Number(e.target.dataset.id);
    console.log(tableIndex);

    if (tableIndex[0] === Number(e.target.dataset.id)) {
      table.innerHTML = `<tr class="about-table-row">
      <th class="about-table-header">${aboutData[tableIndex].headers[0]}</th>
      <th class="about-table-header">${aboutData[tableIndex].headers[1]}</th>
      <th class="about-table-header">${aboutData[tableIndex].headers[2]}</th>
      <th class="about-table-header">${aboutData[tableIndex].headers[3]}</th>
      </tr>
      <tr class="about-table-row">
      <td class="about-table-text">${aboutData[tableIndex].data[0]["project-title"]}</td>
      <td class="about-table-text">${aboutData[tableIndex].data[0]["budget"]}</td>
      <td class="about-table-text">${aboutData[tableIndex].data[0]["estimated"]}</td>
      <td class="about-table-text">${aboutData[tableIndex].data[0]["technology"]}</td>
      </tr>
      <tr class="about-table-row">
      <td class="about-table-text">${aboutData[tableIndex].data[1]["project-title"]}</td>
      <td class="about-table-text">${aboutData[tableIndex].data[1]["project-title"]}</td>
      <td class="about-table-text">${aboutData[tableIndex].data[1]["estimated"]}</td>
      <td class="about-table-text">${aboutData[tableIndex].data[1]["technology"]}</td>
      </tr>
      <tr class="about-table-row">
      <td class="about-table-text">${aboutData[tableIndex].data[2]["project-title"]}</td>
      <td class="about-table-text">${aboutData[tableIndex].data[2]["project-title"]}</td>
      <td class="about-table-text">${aboutData[tableIndex].data[2]["estimated"]}</td>
      <td class="about-table-text">${aboutData[tableIndex].data[2]["technology"]}</td>
      </tr>
      <tr class="about-table-row">
      <td class="about-table-text">${aboutData[tableIndex].data[3]["project-title"]}</td>
      <td class="about-table-text">${aboutData[tableIndex].data[3]["project-title"]}</td>
      <td class="about-table-text">${aboutData[tableIndex].data[3]["estimated"]}</td>
      <td class="about-table-text">${aboutData[tableIndex].data[3]["technology"]}</td>
      </tr>`;

      tableParent.appendChild(table);
    }
  });
});

//Swipper instance
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

//Animation settings
gsap.registerPlugin(ScrollTrigger);

gsap.from(".carousel-text-heading", {
  duration: 0.4,
  opacity: 0,
  y: -150,
  stagger: 0.6,
});

gsap.from(".carousel-text-info", {
  scrollTrigger: ".carousel-text-info",
  duration: 0.4,
  opacity: 0,
  y: 300,
  stagger: 0.6,
});
