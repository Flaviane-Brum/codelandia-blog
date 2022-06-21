const buttons = document.querySelectorAll(".button ");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("like");
  });
});

const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
  reset: true,
});

ScrollReveal().reveal(".post", { delay: 200 });
ScrollReveal().reveal(".date-container", { delay: 400 });
ScrollReveal().reveal(".title", { delay: 500 });
ScrollReveal().reveal(".description", { delay: 600 });
