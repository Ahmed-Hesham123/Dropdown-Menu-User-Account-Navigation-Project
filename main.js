let menuToggle = document.querySelector(".menuToggle");
let navigation = document.querySelector(".navigation");

menuToggle.addEventListener("click", (eo) => {
  navigation.classList.toggle("active");
});
