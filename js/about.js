const infoHeaders = document.querySelectorAll("[data-info-header]");
const infoTexts = document.querySelectorAll("[data-info-text]");

infoHeaders.forEach((header) => {
  header.addEventListener("click", (e) => {
    infoTexts.forEach((text) => {
      if (text.classList.contains("active-info")) {
        text.classList.remove("active-info");
      }
    });
    infoHeaders.forEach((header) => {
      header.childNodes[1].innerText = "chevron_right";
      header.style.color = "#212741";
    });
    if (!header.nextElementSibling.classList.contains("active-info")) {
      header.nextElementSibling.classList.add("active-info");
      header.childNodes[1].innerText = "expand_more";
      header.style.color = "#43ba7f";
    } else {
      header.nextElementSibling.classList.remove("active-info");
    }
  });
});
