let slideIndex = 0;
let slideInterval;

function showSlides() {
    const slides = document.getElementsByClassName('slide');
    const dots = document.getElementsByClassName('dot');
    
    // Esconde todos os slides e remove a classe 'active' dos dots
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        if (dots[i]) {
            dots[i].classList.remove('active');
        }
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    
    // Exibe o slide atual e marca o dot correspondente como 'active'
    slides[slideIndex - 1].style.display = 'block';
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add('active');
    }
}

function moveSlide(n) {
    slideIndex += n;
    const slides = document.getElementsByClassName('slide');
    const dots = document.getElementsByClassName('dot');

    if (slideIndex > slides.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        if (dots[i]) {
            dots[i].classList.remove('active');
        }
    }

    slides[slideIndex - 1].style.display = 'block';
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add('active');
    }
}

function setupSlider() {
    // Verifique se os elementos necessários existem
    const slides = document.getElementsByClassName('slide');
    const dots = document.getElementsByClassName('dot');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    if (slides.length === 0 || dots.length === 0) {
        console.error('Slider elements missing.');
        return;
    }

    showSlides();
    slideInterval = setInterval(showSlides, 5000); // Muda de slide a cada 5 segundos

    if (prevButton) {
        prevButton.addEventListener('click', function() {
            moveSlide(-1);
            resetInterval();
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', function() {
            moveSlide(1);
            resetInterval();
        });
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', function() {
            moveSlide(i + 1 - slideIndex);
            resetInterval();
        });
    }
}

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(showSlides, 5000);
}

document.addEventListener('DOMContentLoaded', setupSlider);
