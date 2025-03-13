// nessa linha a variavel foi declarada como zero
let currentSlide = 0;

function moverslide(direction) {
    const slides = document.querySelectorAll('.card');

// aqui slide.length pega o tamanho em comprimento de quantos slides possui e add a o totalslides
    const totalSlides = slides.length;

// Verifica se a direção é negativa e se o currentSlide é maior que 0 antes de decrementar
    if (direction < 0 && currentSlide > 0) {
        // nessa linha o (%) esta garantindo que o indice resultante esteja sempre dentro so intervalo valido (0 a totalSlindes -1). 
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    } 

// Verifica se a direção é positiva e se o currentSlide é menor que o totalSlides - 1 antes de incrementar
    else if (direction > 0 && currentSlide < totalSlides - 1) {
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    }


// Essa linha calcula o deslocamento necessário para posicionar o slide atual na visualização. cada slide ocupa 100% da largura do container
    const offset = -currentSlide * 100;

    slides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`;
    });
}






