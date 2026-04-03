let current = 0;
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

function updateSlide() {
    slider.style.transform = `translateX(-${current * 100}%)`;
}

function nextSlide() {
    current = (current + 1) % slides.length;
    updateSlide();
}

function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    updateSlide();
}

let startX = 0;

slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

slider.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;

    if (startX > endX + 50) nextSlide();
    if (startX < endX - 50) prevSlide();
});