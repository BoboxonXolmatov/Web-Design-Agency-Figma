const tepaga = document.querySelector(".tepaga");
document.querySelector(".tepaga").addEventListener("click", () => {

//   window.close();
});

document.body.onload = function () {
  tepaga.style = "display: none";
};

window.onscroll = function () {
  if (this.scrollY >= 450) {
    tepaga.style.display = "block";
  } else {
    tepaga.style.display = "none";
  }
};

tepaga.addEventListener("click", () => {
  window.scrollTo(0, 0);
});