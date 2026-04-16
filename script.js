let index = 0;

setInterval(() => {
  const slides = document.querySelector(".slides");
  index++;
  if (index > 2) index = 0;
  slides.style.transform = `translateX(-${index * 100}%)`;
}, 2500);

function copyNumber() {
  navigator.clipboard.writeText("03025736141");
  alert("Number Copied!");
}
