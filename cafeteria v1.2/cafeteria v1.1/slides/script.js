let currentSlide = 0;

function moverslide(direction) {
    const slides = document.querySelectorAll('.card');
    const totalSlides = slides.length;

    if (direction < 0 && currentSlide > 0) {
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    } else if (direction > 0 && currentSlide < totalSlides - 1) {
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    }

    const offset = -currentSlide * 100;

    slides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`;
    });
}
