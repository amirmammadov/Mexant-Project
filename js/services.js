//selecting part
const investmentBtns = document.querySelectorAll("[data-investment-button]");
const investmentContent = document.querySelectorAll(
  "[data-investment-content]"
);

//event handler part
investmentBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    investmentBtns.forEach((button) => {
      button.classList.remove("active-btn");
    });
    const buttonID = e.target.dataset.investmentButton;
    investmentContent.forEach((content) => {
      content.classList.remove("active-investment");
    });
    investmentContent.forEach((content) => {
      if (content.id === buttonID) {
        content.classList.add("active-investment");
        button.classList.add("active-btn");
        button.style.transition = "all .3s linear";
      }
    });
  });
});
