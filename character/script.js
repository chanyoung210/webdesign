const sceneSwiper = new Swiper(".scene-swiper", {
  slidesPerView: 1.15,
  spaceBetween: 16,
  speed: 700,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2.3,
      spaceBetween: 18,
    },
    1024: {
      slidesPerView: 3.35,
      spaceBetween: 18,
    },
  },
});

const scrollButton = document.querySelector(".scroll-indicator");
const section4 = document.querySelector("#section4");

if (scrollButton && section4) {
  scrollButton.addEventListener("click", () => {
    section4.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
