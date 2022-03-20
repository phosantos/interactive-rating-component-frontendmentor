const ratingOption = document.querySelectorAll("[data-rating='option']");
const submit = document.querySelector('[data-state="rating"] .btn');
const states = document.querySelectorAll("[data-state]");
const selectedRatingItem = document.querySelector('[data-rating="selected"]');
let rating;

function selectRating() {
  ratingOption.forEach((item) => {
    item.classList.remove("active");
  });
  this.classList.toggle("active");
}

ratingOption.forEach((item) => {
  item.addEventListener("click", selectRating);
});

function onSubmit() {
  rating = document.querySelector("[data-rating].active").innerText;
  selectedRatingItem.innerText = rating;

  states.forEach((state) => {
    state.classList.toggle("active");
  });
}

submit.addEventListener("click", onSubmit);
