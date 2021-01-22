function hamburger() {
  document.getElementById("hamburger-content").classList.toggle("open");
  document.getElementById("hamburger").classList.toggle("active");
}

document.getElementById("target").addEventListener("click", () => {
  hamburger();
});

let list = document.getElementsByClassName("hamburger-list");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", () => {
    hamburger();
  });
}
