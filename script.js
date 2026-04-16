function copyNumber() {
  navigator.clipboard.writeText("03025736141");
  alert("Number Copied!");
}

// Auto slider
let index = 0;
setInterval(() => {
  let slides = document.querySelector(".slides");
  index = (index + 1) % 3;
  slides.style.transform = `translateX(-${index * 100}%)`;
}, 3000);
