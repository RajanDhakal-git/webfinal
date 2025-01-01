const lists = document.querySelector(".lists");
const prevButton = document.querySelectorAll("#btns button")[0];
const nextButton = document.querySelectorAll("#btns button")[1];

const cardWidth = document.querySelector(".card").offsetWidth + 20; // Includes margin

// Move the carousel left
prevButton.addEventListener("click", () => {
  lists.scrollBy({
    left: -cardWidth,
    behavior: "smooth",
  });
});

// Move the carousel right
nextButton.addEventListener("click", () => {
  lists.scrollBy({
    left: cardWidth,
    behavior: "smooth",
  });
});
