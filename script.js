let current = 0;
let currentSlide = 0;

const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    // Remove active from all
    slides.forEach(slide => slide.classList.remove('active'));

    // Add active to current
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const newsletterForm = document.querySelector('form[name="newsletter"]');

if (newsletterForm) {
    const successMessage = newsletterForm.querySelector('.success-message');

    newsletterForm.addEventListener('submit', function(e){
        e.preventDefault();

        fetch("/", {
            method: "POST",
            body: new FormData(newsletterForm)
        })
        .then(() => {
            if (successMessage) {
                successMessage.style.display = "block";
            }
            newsletterForm.reset();
        })
        .catch(() => alert("Form submission failed!"));
    });
}